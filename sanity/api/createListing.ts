"use server";

import { revalidatePath } from "next/cache";
import { client } from "../lib/client";
import slugify from "slugify";
import { currentUser } from '@clerk/nextjs/server'
import { formSchema } from "@/app/(dashboard)/listings/_lib/schema";
import { z } from "zod";

export const createListing = async (values: z.infer<typeof formSchema>) => {
    try {
        const user = await currentUser()
        
        if (!user) {
            throw new Error("You must be logged in to create a listing");
        }

        if (!values.images || values.images.length === 0) {
            throw new Error("At least one image is required");
        }

        const slug = {
            _type: "slug",
            current: slugify(values.name, {
                lower: true,
                strict: true,
                trim: true
            })
        };

        const imageAssets = await Promise.all(
            values.images.map(async (file: File) => {
                try {
                    const result = await client.assets.upload('image', file, {
                        filename: file.name,
                        contentType: file.type,
                    });

                    if (!result?._id) {
                        throw new Error('Failed to upload image');
                    }

                    return {
                        _type: 'image',
                        asset: {
                            _type: "reference",
                            _ref: result._id
                        }
                    };
                } catch (error) {
                    console.error('Error uploading image:', error);
                    throw new Error('Failed to upload image');
                }
            })
        );

        let creatorImageAsset = null;
        if (user.imageUrl) {
            try {
                const response = await fetch(user.imageUrl);
                if (!response.ok) throw new Error("Failed to fetch user image");
                const imageBuffer = await response.arrayBuffer();
                creatorImageAsset = await client.assets.upload("image", Buffer.from(imageBuffer));
            } catch (error) {
                console.error("Error uploading creator image:", error);
            }
        }

        const doc = await client.create({
            _type: "property",
            name: values.name,
            slug,
            location: values.location,
            price: values.price,
            images: imageAssets,
            propertyType: values.propertyType,
            bedrooms: values.bedrooms,
            bathrooms: values.bathrooms,
            genderPreference: values.genderPreference,
            amenities: values.amenities,
            contractLength: values.contractLength,
            description: values.description,
            status: values.status,
            clerkUserId: user.id,
            creatorName: user.fullName || "Anonymous",
            creatorImage: creatorImageAsset ? {
                _type: "image",
                asset: {
                    _type: "reference",
                    _ref: creatorImageAsset._id,
                }
            } : undefined,
            joinedDate: new Date().toISOString().split('T')[0],
        });

        revalidatePath("/listings");
        return { success: true, data: doc };
    } catch (error) {
        console.error("Error creating listing:", error);
        throw error instanceof Error 
            ? error 
            : new Error("Failed to create listing");
    }
};
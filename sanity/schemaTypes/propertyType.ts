import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const propertyType = defineType({
    name: "property",
    title: "Property",
    type: "document",
    icon: HomeIcon,
    fields: [
        defineField({
            name: "name",
            title: "Property Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "images",
            title: "Property Images",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
            validation: (rule) => rule.min(1).required(),
        }),
        defineField({
            name: "propertyType",
            title: "Property Type",
            type: "reference",
            to: [{ type: "category" }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "bedrooms",
            title: "Number of Bedrooms",
            type: "number",
            validation: (rule) => rule.required().min(0),
        }),
        defineField({
            name: "bathrooms",
            title: "Number of Bathrooms",
            type: "number",
            validation: (rule) => rule.required().min(0),
        }),
        defineField({
            name: "genderPreference",
            title: "Gender Preference",
            type: "string",
            options: {
                list: [
                    { title: "Any Gender", value: "Any Gender" },
                    { title: "Female", value: "Female" },
                    { title: "Male", value: "Male" },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "amenities",
            title: "Amenities",
            type: "array",
            of: [{ type: "reference", to: [{ type: "amenity" }] }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "contractLength",
            title: "Contract Length",
            type: "reference",
            to: [{ type: "contractLength" }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "clerkUserId",
            title: "Clerk User ID",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "creatorName",
            title: "Creator Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "creatorImage",
            title: "Creator Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "joinedDate",
            title: "Joined Date",
            type: "date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "status",
            title: "Property Status",
            type: "string",
            options: {
                list: [
                    { title: "Available", value: "Available" },
                    { title: "Occupied", value: "Occupied" },
                    { title: "Under Maintenance", value: "Under Maintenance" },
                ],
            },
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "location",
            media: "images.0",
        },
    },
});

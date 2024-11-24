import * as z from "zod";

export const formSchema = z.object({
    name: z.string().min(1, "Property name is required"),
    location: z.string().min(1, "Location is required"),
    price: z.number().min(0, "Price must be a positive number"),
    images: z.array(z.any()).min(1, "At least one image is required"),
    propertyType: z.string().min(1, "Property type is required"),
    bedrooms: z.number().min(0, "Number of bedrooms must be 0 or greater"),
    bathrooms: z.number().min(0, "Number of bathrooms must be 0 or greater"),
    genderPreference: z.enum(["Any Gender", "Female", "Male"]),
    amenities: z.array(z.string()).min(1, "Select at least one amenity"),
    contractLength: z.string().min(1, "Contract length is required"),
    description: z.string().min(10, "Description must be at least 10 characters long"),
    status: z.enum(["Available", "Occupied", "Under Maintenance"])
});

import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const amenityType = defineType({
    name: "amenity",
    title: "Amenity",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
    ],
});

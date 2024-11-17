import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contractLengthType = defineType({
    name: "contractLength",
    title: "Contract Length",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
    ],
});

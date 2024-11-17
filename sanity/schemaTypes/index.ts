import { type SchemaTypeDefinition } from "sanity";

import { propertyType } from "./propertyType";
import { categoryType } from "./categoryType";
import { amenityType } from "./amenityTypes";
import { contractLengthType } from "./contractLengthType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [propertyType, categoryType, amenityType, contractLengthType],
};

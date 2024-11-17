import { sanityFetch } from "../lib/live";
import { GET_LISTING_BY_ID } from "../lib/queries";

export const getListingById = async (id: string) => {
    try {
        const response = await sanityFetch({
            query: GET_LISTING_BY_ID,
            params: { id }
        });

        return response.data || null;
    } catch (error) {
        console.log("Error fetching listing", error);
        return [];
    }
};

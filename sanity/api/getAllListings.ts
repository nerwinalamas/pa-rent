import { sanityFetch } from "../lib/live";
import { GET_ALL_LISTINGS } from "../lib/queries";

export const getAllListings = async () => {
    try {
        const response = await sanityFetch({
            query: GET_ALL_LISTINGS,
        });

        return response.data || [];
    } catch (error) {
        console.log("Error fetching all listings", error);
        return [];
    }
};

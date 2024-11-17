import { getAllListings } from "@/sanity/api/getAllListings";
import ListingsProperties from "./_components/listings-properties";

const Listings = async () => {
    const listings = await getAllListings();

    return (
        <div className="min-h-screen rounded-md md:p-4">
            <ListingsProperties listings={listings} />
        </div>
    );
};

export default Listings;

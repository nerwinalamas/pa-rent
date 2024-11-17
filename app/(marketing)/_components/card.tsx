import { Property } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";

const Card = ({ listing }: { listing: Property}) => {
    const imageUrl = listing.images?.[0]?.url || 'https://placehold.co/600x400';

    return (
        <Link href={`/property/${listing?.propertyType?.title.toLowerCase()}/${listing._id}`} className="group">
            <div className="aspect-square relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={`${listing.name} image`}
                    width={600}
                    height={600}
                    priority
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div>
                <h3 className="font-semibold">{listing.name}</h3>
                <p className="text-sm text-muted-foreground">{listing.location}</p>
                <p className="mt-1">₱{listing.price?.toLocaleString()}</p>
            </div>
        </Link>
    );
};

export default Card;

import Image from "next/image";
import Link from "next/link";
import { Rental } from "../_lib/_types";
import { formatPrice } from "../_lib";

const Card = ({ id, name, location, price, images, propertyType }: Rental) => {
    return (
        <Link href={`/property/${propertyType}/${id}`} className="group">
            <div className="aspect-square relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                    src={images[0]}
                    alt={`${name} image`}
                    width={600}
                    height={600}
                    priority
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-muted-foreground">{location}</p>
                <p className="mt-1">₱{formatPrice(price)}</p>
            </div>
        </Link>
    );
};

export default Card;

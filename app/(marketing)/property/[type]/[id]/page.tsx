import Image from "next/image";
import Link from "next/link";
import { SAMPLE_RENTAL_DATA } from "@/app/(marketing)/_lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
    ArrowLeft,
    Bed,
    Bath,
    Home,
    MapPin,
    Clock,
    Wifi,
    Car,
    Shield,
    AirVent,
    CookingPot,
    WashingMachine,
    Cctv,
} from "lucide-react";
import { formatPrice } from "@/app/(marketing)/_lib";

const CardDetails = async ({ params }: { params: { type: string; id: string } }) => {
    const { id } = await params;

    const listing = SAMPLE_RENTAL_DATA.find((data) => data.id === id);

    if (!listing) {
        return <div>Rental not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h1 className="text-3xl font-bold mb-4">{listing.name}</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{listing.location}</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {listing.images.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Listing image ${index + 1}`}
                                width={600}
                                height={400}
                                className="rounded-lg object-cover w-full h-48"
                            />
                        ))}
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">
                            About this space
                        </h2>
                        <p className="text-gray-700">{listing.description}</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">
                            Amenities
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {listing.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center">
                                    {amenity === "Air Conditioning" && (
                                        <AirVent className="mr-2 h-4 w-4" />
                                    )}
                                    {amenity === "Wifi" && (
                                        <Wifi className="mr-2 h-4 w-4" />
                                    )}
                                    {amenity === "Study Area" && (
                                        <Home className="mr-2 h-4 w-4" />
                                    )}
                                    {amenity === "Kitchen" && (
                                        <CookingPot className="mr-2 h-4 w-4" />
                                    )}
                                    {amenity === "Laundry" && (
                                        <WashingMachine className="mr-2 h-4 w-4" />
                                    )}
                                    {amenity === "Parking" && (
                                        <Car className="mr-2 h-4 w-4" />
                                    )}
                                    {amenity === "Security" && (
                                        <Shield className="mr-2 h-4 w-4" />
                                    )}
                                    {amenity === "CCTV" && (
                                        <Cctv className="mr-2 h-4 w-4" />
                                    )}
                                    <span>{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">
                            Additional Information
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <Bed className="mr-2 h-4 w-4" />
                                <span>{listing.bedrooms} Bed</span>
                            </div>
                            <div className="flex items-center">
                                <Bath className="mr-2 h-4 w-4" />
                                <span>{listing.bathrooms} Bath</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                <span>
                                    Contract Length: {listing.contractLength}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-white p-6 rounded-lg shadow-md sticky top-6">
                        <div className="mb-4">
                            <span className="text-3xl font-bold">
                                ₱{formatPrice(listing.price)}
                            </span>
                            <span className="text-gray-600"> / month</span>
                        </div>
                        <Badge>{listing.propertyType}</Badge>
                        <Badge className="ml-2">
                            {listing.genderPreference} Only
                        </Badge>
                        <Separator className="my-4" />
                        <div className="flex items-center mb-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage
                                    src={listing.contactPerson.image}
                                    alt={listing.contactPerson.name}
                                />
                                <AvatarFallback>
                                    {listing.contactPerson.name[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div className="ml-4">
                                <div className="font-semibold">
                                    {listing.contactPerson.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Joined in {listing.contactPerson.joinedDate}
                                </div>
                            </div>
                        </div>
                        <Button className="w-full mb-2">Contact</Button>
                        <Button variant="outline" className="w-full">
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
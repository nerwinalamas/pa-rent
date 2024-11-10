export type PropertyType = "Bedspace" | "Apartment" | "House" | "All";
export type GenderPreference = "Female" | "Male" | "Any Gender";
export type Amenity =
    | "Air Conditioning"
    | "Wifi"
    | "Kitchen"
    | "Laundry"
    | "Parking"
    | "Security"
    | "CCTV"
    | "Study Area";
export type ContractLength = "1 month" | "3 months" | "6 months" | "1 year";

export type ContactPerson = {
    name: string;
    image: string;
    joinedDate: string;
};

export type Rental = {
    id: string;
    name: string;
    location: string;
    price: number;
    images: string[];
    propertyType: PropertyType;
    bedrooms: number;
    bathrooms: number;
    genderPreference: GenderPreference;
    amenities: Amenity[];
    contractLength: ContractLength;
    description: string;
    contactPerson: ContactPerson;
};

export type RentalList = Rental[];

"use client";

import { useState } from "react";
import {
    Home,
    Wifi,
    Car,
    Shield,
    AirVent,
    CookingPot,
    WashingMachine,
    Cctv,
    PlusCircle,
    Building2,
    Ellipsis,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SAMPLE_RENTAL_DATA } from "@/app/(marketing)/_lib/data";

const ListingsProperties = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredListings = SAMPLE_RENTAL_DATA.filter(
        (listing) =>
            listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            listing.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <CardTitle className="text-2xl">All Listings</CardTitle>
                        <CardDescription>
                            Manage and monitor your property listings
                        </CardDescription>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create Listing
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <Input
                        placeholder="Search listings..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm"
                    />
                </div>
                <div className="rounded-md border">
                    <Table className="whitespace-nowrap">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Property</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Details</TableHead>
                                <TableHead>Amenities</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredListings.map((listing) => (
                                <TableRow key={listing.id}>
                                    <TableCell className="font-medium">
                                        {listing.name}
                                    </TableCell>
                                    <TableCell>{listing.location}</TableCell>
                                    <TableCell>
                                        ₱{listing.price.toLocaleString()}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Building2 className="h-4 w-4 text-muted-foreground" />
                                            {listing.propertyType}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {listing.bedrooms} BR •{" "}
                                        {listing.bathrooms} BA
                                        <br />
                                        <span className="text-sm text-muted-foreground">
                                            {listing.genderPreference} •{" "}
                                            {listing.contractLength}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            {listing.amenities.map(
                                                (amenity, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-1"
                                                    >
                                                        {amenity ===
                                                            "Air Conditioning" && (
                                                            <div
                                                                title={amenity}
                                                                className="p-1 rounded-sm cursor-pointer hover:bg-slate-100"
                                                            >
                                                                <AirVent className="h-4 w-4" />
                                                            </div>
                                                        )}
                                                        {amenity === "Wifi" && (
                                                            <div
                                                                title={amenity}
                                                                className="p-1 rounded-sm cursor-pointer hover:bg-slate-100"
                                                            >
                                                                <Wifi className="h-4 w-4" />
                                                            </div>
                                                        )}
                                                        {amenity ===
                                                            "Study Area" && (
                                                            <div
                                                                title={amenity}
                                                                className="p-1 rounded-sm cursor-pointer hover:bg-slate-100"
                                                            >
                                                                <Home className="h-4 w-4" />
                                                            </div>
                                                        )}
                                                        {amenity ===
                                                            "Kitchen" && (
                                                            <div
                                                                title={amenity}
                                                                className="p-1 rounded-sm cursor-pointer hover:bg-slate-100"
                                                            >
                                                                <CookingPot className="h-4 w-4" />
                                                            </div>
                                                        )}
                                                        {amenity ===
                                                            "Laundry" && (
                                                            <div
                                                                title={amenity}
                                                                className="p-1 rounded-sm cursor-pointer hover:bg-slate-100"
                                                            >
                                                                <WashingMachine className="h-4 w-4" />
                                                            </div>
                                                        )}
                                                        {amenity ===
                                                            "Parking" && (
                                                            <div
                                                                title={amenity}
                                                                className="p-1 rounded-sm cursor-pointer hover:bg-slate-100"
                                                            >
                                                                <Car className="h-4 w-4" />
                                                            </div>
                                                        )}
                                                        {amenity ===
                                                            "Security" && (
                                                            <div
                                                                title={amenity}
                                                                className="p-1 rounded-sm cursor-pointer hover:bg-slate-100"
                                                            >
                                                                <Shield className="h-4 w-4" />
                                                            </div>
                                                        )}
                                                        {amenity === "CCTV" && (
                                                            <div
                                                                title={amenity}
                                                                className="p-1 rounded-sm cursor-pointer hover:bg-slate-100"
                                                            >
                                                                <Cctv className="h-4 w-4" />
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div
                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                listing.status === "Available"
                                                    ? "bg-green-100 text-green-700"
                                                    : listing.status ===
                                                        "Occupied"
                                                      ? "bg-blue-100 text-blue-700"
                                                      : "bg-yellow-100 text-yellow-700"
                                            }`}
                                        >
                                            {listing.status}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="h-8 w-8 p-0"
                                                >
                                                    <Ellipsis className="h-4 w-4" />
                                                    <span className="sr-only">
                                                        Open menu
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                    Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    View details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Edit listing
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Update status
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-600">
                                                    Delete listing
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

export default ListingsProperties;

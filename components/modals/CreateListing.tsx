"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Upload } from "lucide-react";
import { useListingModal } from "@/hooks/useListingModal";

// You'll need to fetch these from Sanity
const propertyTypes = ["Apartment", "House", "Condo", "Villa"];
const amenities = ["WiFi", "Parking", "Gym", "Pool", "Pet Friendly"];
const contractLengths = ["3 months", "6 months", "1 year", "2 years"];

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Property name must be at least 2 characters.",
    }),
    slug: z.string().min(2, {
        message: "Slug must be at least 2 characters.",
    }),
    location: z.string().min(2, {
        message: "Location must be at least 2 characters.",
    }),
    price: z.number().min(0, {
        message: "Price must be a positive number.",
    }),
    images: z.array(z.any()).min(1, {
        message: "At least one image is required.",
    }),
    propertyType: z.string(),
    bedrooms: z.number().min(0),
    bathrooms: z.number().min(0),
    genderPreference: z.enum(["Any Gender", "Female", "Male"]),
    amenities: z.array(z.string()).min(1, {
        message: "Select at least one amenity.",
    }),
    contractLength: z.string(),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    status: z.enum(["Available", "Occupied", "Under Maintenance"]),
});

const CreateListing = () => {
    const { isOpen, onClose, type } = useListingModal();
    const isModalOpen = isOpen && type === "createListing";

    const handleDialogChange = () => {
        onClose();
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            slug: "",
            location: "",
            price: 0,
            images: [],
            propertyType: "",
            bedrooms: 0,
            bathrooms: 0,
            genderPreference: "Any Gender",
            amenities: [],
            contractLength: "",
            description: "",
            status: "Available",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Here you would typically send the data to Sanity
        console.log(values);
        handleDialogChange();
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={handleDialogChange}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Create New Property Listing</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to create a new property
                        listing.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Property Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter property name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slug</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter slug"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This will be used in the URL. It&apos;s
                                        automatically generated but you can
                                        customize it.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter location"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter price"
                                            {...field}
                                            onChange={(e) =>
                                                field.onChange(
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="images"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Images</FormLabel>
                                    <FormControl>
                                        <div className="flex items-center space-x-2">
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                onChange={(e) => {
                                                    const files = Array.from(
                                                        e.target.files || []
                                                    );
                                                    field.onChange(files);
                                                }}
                                            />
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="icon"
                                            >
                                                <Upload className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormDescription>
                                        Upload at least one image of the
                                        property.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="propertyType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Property Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select property type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {propertyTypes.map((type) => (
                                                <SelectItem
                                                    key={type}
                                                    value={type}
                                                >
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="bedrooms"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bedrooms</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                onChange={(e) =>
                                                    field.onChange(
                                                        Number(e.target.value)
                                                    )
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="bathrooms"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bathrooms</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                onChange={(e) =>
                                                    field.onChange(
                                                        Number(e.target.value)
                                                    )
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="genderPreference"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gender Preference</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select gender preference" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Any Gender">
                                                Any Gender
                                            </SelectItem>
                                            <SelectItem value="Female">
                                                Female
                                            </SelectItem>
                                            <SelectItem value="Male">
                                                Male
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="amenities"
                            render={() => (
                                <FormItem>
                                    <div className="mb-4">
                                        <FormLabel className="text-base">
                                            Amenities
                                        </FormLabel>
                                        <FormDescription>
                                            Select the amenities available in
                                            this property.
                                        </FormDescription>
                                    </div>
                                    {amenities.map((item) => (
                                        <FormField
                                            key={item}
                                            control={form.control}
                                            name="amenities"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item}
                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value?.includes(
                                                                    item
                                                                )}
                                                                onCheckedChange={(
                                                                    checked
                                                                ) => {
                                                                    return checked
                                                                        ? field.onChange(
                                                                              [
                                                                                  ...field.value,
                                                                                  item,
                                                                              ]
                                                                          )
                                                                        : field.onChange(
                                                                              field.value?.filter(
                                                                                  (
                                                                                      value
                                                                                  ) =>
                                                                                      value !==
                                                                                      item
                                                                              )
                                                                          );
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {item}
                                                        </FormLabel>
                                                    </FormItem>
                                                );
                                            }}
                                        />
                                    ))}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contractLength"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contract Length</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select contract length" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {contractLengths.map((length) => (
                                                <SelectItem
                                                    key={length}
                                                    value={length}
                                                >
                                                    {length}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Available">
                                                Available
                                            </SelectItem>
                                            <SelectItem value="Occupied">
                                                Occupied
                                            </SelectItem>
                                            <SelectItem value="Under Maintenance">
                                                Under Maintenance
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter property description"
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Create Listing</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateListing;

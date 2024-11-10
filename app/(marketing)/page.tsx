import { SAMPLE_RENTAL_DATA } from "./_lib/data";
import Card from "./_components/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Home = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-[240px_1fr] gap-8 py-8 px-4">
            <aside className="p-4 rounded-lg space-y-4">
                <h2 className="text-lg font-semibold">Filter</h2>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="type">
                        <AccordionTrigger>Property Type</AccordionTrigger>
                        <AccordionContent>
                            <RadioGroup defaultValue="all">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="all" id="all" />
                                    <Label htmlFor="all">All</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="bedspace"
                                        id="bedspace"
                                    />
                                    <Label htmlFor="bedspace">Bedspace</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="apartment"
                                        id="apartment"
                                    />
                                    <Label htmlFor="apartment">Apartment</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="house" id="house" />
                                    <Label htmlFor="house">House</Label>
                                </div>
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="price">
                        <AccordionTrigger>Price Range</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4">
                                <Slider
                                    defaultValue={[3000, 20000]}
                                    max={50000}
                                    min={0}
                                    step={500}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-sm">
                                    <span>₱3,000</span>
                                    <span>₱20,000</span>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="bedrooms">
                        <AccordionTrigger>Bedrooms</AccordionTrigger>
                        <AccordionContent>
                            <RadioGroup defaultValue="any">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="any" id="any-bed" />
                                    <Label htmlFor="any-bed">Any</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="studio"
                                        id="studio"
                                    />
                                    <Label htmlFor="studio">Studio</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="1" id="1-bed" />
                                    <Label htmlFor="1-bed">1 Bedroom</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="2" id="2-bed" />
                                    <Label htmlFor="2-bed">2 Bedrooms</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="3plus"
                                        id="3plus-bed"
                                    />
                                    <Label htmlFor="3plus-bed">
                                        3+ Bedrooms
                                    </Label>
                                </div>
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="bathrooms">
                        <AccordionTrigger>Bathrooms</AccordionTrigger>
                        <AccordionContent>
                            <RadioGroup defaultValue="any">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="any" id="any-bath" />
                                    <Label htmlFor="any-bath">Any</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="1" id="1-bath" />
                                    <Label htmlFor="1-bath">1 Bathroom</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="2" id="2-bath" />
                                    <Label htmlFor="2-bath">2 Bathrooms</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="3plus"
                                        id="3plus-bath"
                                    />
                                    <Label htmlFor="3plus-bath">
                                        3+ Bathrooms
                                    </Label>
                                </div>
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="gender">
                        <AccordionTrigger>Gender Preference</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="female" />
                                    <Label htmlFor="female">Female only</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="male" />
                                    <Label htmlFor="male">Male only</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="any-gender" />
                                    <Label htmlFor="any-gender">
                                        Any gender
                                    </Label>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="amenities">
                        <AccordionTrigger>Amenities</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="ac" />
                                    <Label htmlFor="ac">Air conditioning</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="wifi" />
                                    <Label htmlFor="wifi">WiFi</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="kitchen" />
                                    <Label htmlFor="kitchen">Kitchen</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="laundry" />
                                    <Label htmlFor="laundry">
                                        Laundry facilities
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="parking" />
                                    <Label htmlFor="parking">Parking</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="security" />
                                    <Label htmlFor="security">
                                        24/7 Security
                                    </Label>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="contract">
                        <AccordionTrigger>Contract Length</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="month" />
                                    <Label htmlFor="month">
                                        Month-to-month
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="3months" />
                                    <Label htmlFor="3months">3 months</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="6months" />
                                    <Label htmlFor="6months">6 months</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="1year" />
                                    <Label htmlFor="1year">1 year</Label>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="flex gap-2">
                    <Button className="w-full">Apply Filters</Button>
                    <Button variant="outline" className="w-full">
                        Reset
                    </Button>
                </div>
            </aside>

            <main className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SAMPLE_RENTAL_DATA.map((rental) => (
                    <Card key={rental.id} {...rental} />
                ))}
            </main>
        </div>
    );
};

export default Home;

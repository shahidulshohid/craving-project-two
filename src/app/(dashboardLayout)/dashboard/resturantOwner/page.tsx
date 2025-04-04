"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import restaurantLogo from "@/assets/logo.png"
import Image from "next/image";
import { FC } from "react";



interface SalesData {
    day: string;
    sales: number;
}

interface FoodCategoryData {
    name: string;
    value: number;
}


const RestaurantOwner: FC = () => {

    const weeklySales: SalesData[] = [
        { day: "Mon", sales: 1200 },
        { day: "Tue", sales: 900 },
        { day: "Wed", sales: 1500 },
        { day: "Thu", sales: 1800 },
        { day: "Fri", sales: 2200 },
        { day: "Sat", sales: 2500 },
        { day: "Sun", sales: 2000 },
    ];

    const foodCategory: FoodCategoryData[] = [
        { name: "Burgers", value: 10 },
        { name: "Pizzas", value: 5 },
        { name: "Drinks", value: 7 },
        { name: "Desserts", value: 8 },
    ];


    return (
        <div className="p-6 mx-auto">
            {/* restaurant information */}
            <Card className="p-4 shadow-lg bg-orange-100">
                <CardContent>
                    <div className="flex items-center space-x-4">
                        <Image src={restaurantLogo} alt="Restaurant Logo" className="w-16 h-16 rounded-full" />
                        <div>
                            <h2 className="text-2xl font-bold">Delicious Bites</h2>
                            <p className="text-gray-500">Emperor Building, Gulshan-2, Dhaka</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* statistics cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <Card className="p-4 text-center transition-transform hover:scale-105 duration-300 ease-in-out bg-amber-100">
                    <CardContent>
                        <h3 className="text-xl font-semibold">Total Food Items</h3>
                        <p className="text-2xl font-bold">30</p>
                    </CardContent>
                </Card>
                <Card className="p-4 text-center transition-transform hover:scale-105 duration-300 ease-in-out bg-teal-100">
                    <CardContent>
                        <h3 className="text-xl font-semibold">Food Categories</h3>
                        <p className="text-2xl font-bold">4</p>
                    </CardContent>
                </Card>
                <Card className="p-4 text-center transition-transform hover:scale-105 duration-300 ease-in-out bg-rose-100">
                    <CardContent>
                        <h3 className="text-xl font-semibold">Total Sales</h3>
                        <p className="text-2xl font-bold">$12,000</p>
                    </CardContent>
                </Card>
                <Card className="p-4 text-center transition-transform hover:scale-105 duration-300 ease-in-out bg-violet-100">
                    <CardContent>
                        <h3 className="text-xl font-semibold">Total Orders</h3>
                        <p className="text-2xl font-bold">320</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* bar chart */}
                <Card className="p-4 border border-blue-300">
                    <CardContent>
                        <h3 className="text-xl font-semibold text-center mb-4">Weekly Sales</h3>
                        <BarChart width={400} height={250} data={weeklySales}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sales" fill="#8884d8" />
                        </BarChart>
                    </CardContent>
                </Card>
                {/* pie chart */}
                <Card className="p-4 border border-green-300">
                    <CardContent>
                        <h3 className="text-xl font-semibold text-center mb-4">Food Categories</h3>
                        <PieChart width={400} height={250}>
                            <Pie data={foodCategory} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
                            <Tooltip />
                        </PieChart>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default RestaurantOwner;
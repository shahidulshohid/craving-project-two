"use client";
import React from "react";
import BGImg from "@/assets/bgImg.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { addResturantOwner } from "@/app/action/auth/allApi";

const BeOwner = () => {
  type Inputs = {
    restaurantOwnerEmail: string;
    restaurantName: string;
    restaurantEmail: string;
    restaurantNumber: number;
    restaurantDescription: string;
    restaurantAddress: string;
    ownerNIDPhoto: string;
    created_at: Date;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const beRestaurantOwner = { ...data, created_at: new Date() };
    // console.log(beRestaurantOwner);
    try {
      await addResturantOwner(beRestaurantOwner);
      toast.success("Application Submitted Successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong!" + error);
    }
  };
  return (
    <section
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${BGImg.src})`,
      }}
    >
      <div className="w-11/12 lg:w-9/12 mx-auto py-8 sm:py-12  space-y-10">
        <h2 className="text-center text-2xl lg:text-4xl font-semibold">
          Be <span className="text-amber-500">Owner</span>
        </h2>
        <div className="bg-white shadow-2xl p-10 rounded-3xl">
          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Restaurant Owner Email */}
            <div className="space-y-3">
              <Label className="font-semibold">Email</Label>
              <Input
                readOnly
                value={"restaurantowner@gmail.com"}
                type="email"
                id="email"
                placeholder="Type your email"
                {...register("restaurantOwnerEmail", { required: true })}
                required
              />
              {errors.restaurantOwnerEmail && (
                <span className="text-red-600 text-sm">
                  {errors.restaurantOwnerEmail.message}
                </span>
              )}
            </div>
            {/* Restaurant Name */}
            <div className="space-y-3">
              <Label className="font-semibold">Restaurant Name*</Label>
              <Input
                type="text"
                id="name"
                placeholder="Type restaurant name"
                {...register("restaurantName", { required: true })}
                required
              />
              {errors.restaurantName && (
                <span className="text-red-600 text-sm">
                  {errors.restaurantName.message}
                </span>
              )}
            </div>
            {/* Restaurant Email */}
            <div className="space-y-3">
              <Label className="font-semibold">Restaurant Email*</Label>
              <Input
                type="email"
                id="restaurant_email"
                placeholder="Type restaurant email"
                {...register("restaurantEmail", { required: true })}
                required
              />
              {errors.restaurantEmail && (
                <span className="text-red-600 text-sm">
                  {errors.restaurantEmail.message}
                </span>
              )}
            </div>
            {/* Restaurant Number */}
            <div className="space-y-3">
              <Label className="font-semibold">Restaurant Number*</Label>
              <Input
                type="number"
                id="restaurant_number"
                placeholder="+880 1234 567890"
                {...register("restaurantNumber", {
                  required: "Rider number is required",
                  pattern: {
                    value: /^\d{11,}$/,
                    message: "Restaurant number must be at least 11 digits",
                  },
                })}
                required
              />
              {errors.restaurantNumber && (
                <span className="text-red-600 text-sm">
                  {errors.restaurantNumber.message}
                </span>
              )}
            </div>
            {/* Restaurant Description */}
            <div className="space-y-3">
              <Label className="font-semibold">Description*</Label>
              <Input
                type="text"
                id="description"
                placeholder="Type restaurant description"
                {...register("restaurantDescription", { required: true })}
                required
              />
              {errors.restaurantDescription && (
                <span className="text-red-600 text-sm">
                  {errors.restaurantDescription.message}
                </span>
              )}
            </div>
            {/* Restaurant Address */}
            <div className="space-y-3">
              <Label className="font-semibold">Restaurant Address*</Label>
              <Input
                type="text"
                id="restaurant_address"
                placeholder="Type restaurant address"
                {...register("restaurantAddress", { required: true })}
                required
              />
              {errors.restaurantAddress && (
                <span className="text-red-600 text-sm">
                  {errors.restaurantAddress.message}
                </span>
              )}
            </div>
            {/* Restaurant Owner NID photo */}
            <div className="space-y-3">
              <Label className="font-semibold">NID Photo*</Label>
              <Input
                // type="file"
                // className="border-none"
                placeholder="Type restaurant owner NID photo"
                type="url"
                id="restaurant_address"
                {...register("ownerNIDPhoto", { required: true })}
                required
              />
              {errors.ownerNIDPhoto && (
                <span className="text-red-600 text-sm">
                  {errors.ownerNIDPhoto.message}
                </span>
              )}
            </div>
            <input
              type="submit"
              value={"Submit"}
              className="bg-orange-400 hover:bg-orange-300 text-white text-lg font-bold rounded-lg py-2 px-4 col-span-1 sm:col-span-2"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default BeOwner;

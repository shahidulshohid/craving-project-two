"use client";
import React from "react";
import BGImg from "@/assets/bgImg.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { addRider } from "@/app/action/auth/allApi";
import { toast } from "react-toastify";

const BeRider = () => {
  type Inputs = {
    // restaurant_id: string;
    id: string;
    riderEmail: string;
    riderName: string;
    riderNumber: number;
    riderAddress: string;
    description: string;
    vehicleType: string;
    created_at: Date;
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const beRider = { ...data, created_at: new Date() };
    try {
      await addRider(beRider);
      toast.success("Rider Added Successfully!");
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
      <div className="w-11/12 lg:w-9/12 mx-auto py-8 sm:py-12 space-y-10">
        <h2 className="text-center text-2xl lg:text-4xl font-bold">
          Be <span className="text-amber-500">Rider</span>
        </h2>
        <div className="bg-white shadow-2xl p-10 rounded-3xl">
          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Rider Email */}
            <div className="space-y-3">
              <Label className="font-semibold">Rider Email</Label>
              <Input
                readOnly
                value={"rider@gmail.com"}
                type="email"
                id="email"
                placeholder="Type your email"
                {...register("riderEmail", { required: true })}
                required
              />
              {errors.riderEmail && (
                <span className="text-red-600 text-sm">
                  Rider email is required
                </span>
              )}
            </div>
            {/* Rider Name */}
            <div className="space-y-3">
              <Label className="font-semibold">Rider Name*</Label>
              <Input
                type="text"
                id="name"
                placeholder="Type your name"
                {...register("riderName", { required: true })}
                required
              />
              {errors.riderName && (
                <span className="text-red-600 text-sm">
                  Rider Name is required
                </span>
              )}
            </div>
            {/* Rider Number */}
            <div className="space-y-3">
              <Label className="font-semibold">Rider Number*</Label>
              <Input
                type="text"
                id="rider_number"
                placeholder="+880 1234 567890"
                {...register("riderNumber", {
                  required: "Rider number is required",
                  pattern: {
                    value: /^\d{11,}$/,
                    message: "Rider number must be at least 11 digits",
                  },
                })}
              />
              {errors.riderNumber && (
                <span className="text-red-600 text-sm">
                  {errors.riderNumber.message}
                </span>
              )}
            </div>

            {/* Rider Address */}
            <div className="space-y-3">
              <Label className="font-semibold">Rider Address*</Label>
              <Input
                type="text"
                id="rider_address"
                placeholder="Type Rider address"
                {...register("riderAddress", { required: true })}
                required
              />
              {errors.riderAddress && (
                <span className="text-red-600 text-sm">
                  Rider address is required
                </span>
              )}
            </div>
            {/* Vehicle Type */}
            <div className="space-y-3">
              <Label className="font-semibold">Vehicle Type*</Label>
              <Controller
                name="vehicleType"
                control={control}
                defaultValue="cycle"
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex gap-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="r1" />
                      <Label>None</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cycle" id="r2" />
                      <Label>Cycle</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bike" id="r3" />
                      <Label>Bike</Label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.vehicleType && (
                <span className="text-red-600 text-sm">
                  Vehicle type is required
                </span>
              )}
            </div>
            {/* Rider Description */}
            <div className="space-y-3 col-span-2">
              <Label className="font-semibold">Description*</Label>
              <Textarea
                style={{ resize: "none" }}
                id="description"
                placeholder="Type Rider description"
                {...register("description", { required: true })}
                required
              />
              {errors.description && (
                <span className="text-red-600 text-sm">
                  Food Name is required
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

export default BeRider;

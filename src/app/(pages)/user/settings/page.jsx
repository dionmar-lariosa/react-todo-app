"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/Button";
import Input from "@/components/Input";
import InputError from "@/components/InputError";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    phoneNumber: yup.number().required(),
  })
  .required();

const Settings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-start justify-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded p-8 md:w-2/3 lg:w-1/2">
        <div className="flex items-center mb-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Update profile</h1>
            <hr className="border-gray-300" />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <Input type="text" label="Name" id="name" {...register("name")} />
            {errors.name && <InputError message={errors.name?.message} />}
          </div>
          <div className="mb-4">
            <Input
              type="email"
              label="Email"
              id="email"
              {...register("email")}
            />
            {errors.email && <InputError message={errors.email?.message} />}
          </div>
          <div className="mb-4">
            <Input
              type="number"
              label="Phone Number"
              id="phoneNumber"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <InputError message={errors.phoneNumber?.message} />
            )}
          </div>
          <div className="flex justify-end">
            <Button type="submit" color="primary">
              Save Change`s
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;

"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/Button";
import Input from "@/components/Input";
import InputError from "@/components/InputError";

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const email = register("email");
  const password = register("password");

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-4">
        <Input
          type="email"
          label="Email"
          id="email"
          name={email.name}
          onChange={email.onChange}
          onBlur={email.onBlur}
          ref={email.ref}
        />
        {errors.email && <InputError message={errors.email?.message} />}
      </div>
      <div className="mb-6">
        <Input
          type="password"
          label="Password"
          id="password"
          name={password.name}
          onChange={password.onChange}
          onBlur={password.onBlur}
          ref={password.ref}
        />
        {errors.password && <InputError message={errors.password?.message} />}
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" color="primary">
          Sign In
        </Button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default Login;

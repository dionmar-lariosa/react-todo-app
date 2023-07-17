import Button from "@/components/Button";
import Input from "@/components/Input";
import InputError from "@/components/InputError";

const Register = () => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-4">
        <Input type="text" label="Name" id="name" {...register("name")} />
        {errors.name && <InputError message={errors.name?.message} />}
      </div>
      <div className="mb-4">
        <Input type="email" label="Email" id="email" {...register("email")} />
        {errors.email && <InputError message={errors.email?.message} />}
      </div>
      <div className="mb-4">
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="********"
          {...register("password")}
        />
        {errors.password && <InputError message={errors.password?.message} />}
      </div>
      <div className="mb-6">
        <Input
          type="password"
          label="Confirm Password"
          id="confirmPassword"
          placeholder="********"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <InputError message={errors.confirmPassword?.message} />
        )}
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" color="primary">
          Register
        </Button>
      </div>
    </form>
  );
};

export default Register;

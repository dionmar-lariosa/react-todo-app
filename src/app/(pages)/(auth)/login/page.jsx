import Button from "@/components/Button";
import Input from "@/components/Input";

const Login = () => {
  return (
    <form noValidate>
      <div className="mb-4">
        <Input type="email" label="Email" id="email" />
      </div>
      <div className="mb-6">
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="********"
        />
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

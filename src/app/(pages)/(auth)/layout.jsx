const AuthLayout = ({ children }) => (
  <div className="flex justify-center">
    <div className="w-full max-w-md p-4">
      <div className="shadow-md rounded-md px-8 pt-6 pb-8">{children}</div>
    </div>
  </div>
);

export default AuthLayout;

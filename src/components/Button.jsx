const Button = ({ children, color, ...rest }) => {
  const base = "font-semibold py-2 px-4 rounded";
  const btnColor = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-700",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  const btnClass = `${btnColor[color]} ${base}`;
  return (
    <button {...rest} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;

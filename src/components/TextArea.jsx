import { forwardRef } from "react";

const TextArea = forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
      cols="1"
      rows="1"
      {...props}
    ></textarea>
  );
});

TextArea.displayName = "TextArea";
export default TextArea;

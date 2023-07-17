"use client";

import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function Input(
  { label, id, isFocused = false, ...rest },
  ref,
) {
  const inputRef = useRef();

  const input = ref ? ref : inputRef;

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, [isFocused, input]);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        ref={input}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        {...rest}
      />
    </div>
  );
});

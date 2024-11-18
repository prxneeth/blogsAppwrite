import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="">
      {label && (
        <label className="inline-block mb-t p-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`p-2 w-full rounded-md bg-white text-black outline-none focus:bg-gray-100 duration-200 border-none  ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;

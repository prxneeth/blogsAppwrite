import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 border-none hover:bg-blue-600 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

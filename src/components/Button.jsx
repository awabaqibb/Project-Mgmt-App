import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-stone-800 px-6 py-2 rounded-md text-stone-50  hover:bg-stone-950"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const Input = ({ className, ...rest }) => {
  return (
    <input className={` text-sm border p-2 rounded ${className}`} {...rest} />
  );
};

export default Input;

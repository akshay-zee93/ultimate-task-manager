import React from "react";

const TextArea = ({ id, name, className, ariaLabel, ...rest }) => {
  return (
    <textarea
      id={id}
      name={name}
      aria-label={ariaLabel}
      className={`w-full text-sm border p-2 rounded ${className}`}
      {...rest}
    />
  );
};

export default TextArea;

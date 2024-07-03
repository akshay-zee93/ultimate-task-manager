import React from "react";

const Tag = ({ text, className }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`inline-block font-semibold p-2 rounded-lg border text-base ${className}`}
    >
      {text}
    </div>
  );
};

export default Tag;

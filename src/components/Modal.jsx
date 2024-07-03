import React, { useEffect } from "react";

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-lg relative shadow-2xl border-2 border-gray-400 w-fit p-5 lg:p-10"
        role="document"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close Modal"
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;

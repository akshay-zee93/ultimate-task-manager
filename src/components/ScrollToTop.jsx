import React, { useState, useEffect } from "react";
import ChevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";

const ScrollToTopButton = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (containerRef.current.scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    containerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", toggleVisibility);
    return () => {
      container.removeEventListener("scroll", toggleVisibility);
    };
  }, [containerRef]);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800 transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

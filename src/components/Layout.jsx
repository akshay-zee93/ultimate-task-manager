import { Toaster } from "react-hot-toast";
import Header from "./Header";
import ScrollToTopButton from "./ScrollToTop";
import { useRef } from "react";

const Layout = ({ children }) => {
  const containerRef = useRef(null);

  return (
    <div className="h-screen  bg-gray-100" role="document">
      <Header />
      <main
        ref={containerRef}
        className="container overflow-auto mx-auto mt-14 h-full p-4"
        role="main"
      >
        {children}
      </main>
      <ScrollToTopButton containerRef={containerRef} />
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;

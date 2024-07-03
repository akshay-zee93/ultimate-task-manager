import { Toaster } from "react-hot-toast";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen overflow-auto bg-gray-100" role="document">
      <Header />
      <main className="container mx-auto h-full p-4" role="main">
        {children}
      </main>
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;

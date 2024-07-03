import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" p-6 flex flex-col gap-7 bg-white">
      <p className="text-2xl  font-normal">Page Not Found</p>
      <Link to={"/"} className=" underline text-purple-800">
        Redirect To Home Page
      </Link>
    </div>
  );
};

export default NotFound;

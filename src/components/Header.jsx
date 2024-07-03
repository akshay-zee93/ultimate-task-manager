import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="fixed top-0 w-full bg-blue-600 text-white p-4"
      role="banner"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold lg:text-3xl">Task Manager</h1>
        <nav className="flex gap-4" aria-label="Main navigation">
          <Link to="/" className="text-base lg:text-lg hover:underline">
            Home
          </Link>
          <Link to="/new" className="text-base lg:text-lg hover:underline">
            Add Task
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navOption = (
    <>
      <li>
        <Link to="/" className="hover:text-yellow-500">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-yellow-500">
          CONTACT US
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="hover:text-yellow-500">
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link to="/menu" className="hover:text-yellow-500">
          OUR MENU
        </Link>
      </li>
      <li>
        <Link to="/shop" className="hover:text-yellow-500">
          OUR SHOP
        </Link>
      </li>
      <li>
        <Link to="/cart" className="flex items-center hover:text-yellow-500">
          <span className="relative">
            <i className="fas fa-shopping-cart text-2xl"></i>
            <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
              1
            </span>
          </span>
        </Link>
      </li>
      <li>
        <button
          className="text-green-500 hover:text-yellow-500"
          onClick={() => console.log("Sign In Clicked")}
        >
          SIGN IN
        </button>
      </li>
      <li>
        <button
          className="text-red-500 hover:text-yellow-500"
          onClick={() => console.log("Sign Out Clicked")}
        >
          SIGN OUT
        </button>
      </li>
    </>
  );

  return (
    <nav className="fixed max-w-screen-xl  z-10 w-full bg-black bg-opacity-30 text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center lg:px-4 px-2 py-2">
        {/* Navbar Start */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-yellow-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52"
              >
                {navOption}
              </ul>
            )}
          </div>
          {/* Logo */}
          <Link to="/" className="text-xl font-bold hover:text-yellow-500">
            Bistro Boss
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
          <ul className="flex space-x-6">{navOption}</ul>
        </div>

        {/* Navbar End */}
        <div className="flex items-center">
          <span className="border-4 border-indigo-500 bg-gray-500 p-3 rounded-full">
            <Link
              to="/profile"
              className="hover:text-yellow-500 flex items-center"
            >
              <i className="fas fa-user text-xl"></i>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

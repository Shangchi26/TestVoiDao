import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCartShopping, FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import logo from "../assets/logo.png";

const Header = () => {
  const [showBar, setShowBar] = useState(false);
  const handleClick = () => {
    setShowBar(false);
  };

  const [userDropDown, setUserDropDown] = useState(false);
  console.log(userDropDown)

  return (
    <header className="bg-pink-200 z-50 sticky h-20 top-0 w-full px-[5%] flex items-center justify-between font-Josefin">
      <div className="relative w-[10%] h-full">
        <Link to="/" className="w-20 absolute" onClick={handleClick}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="w-[10%] lg:hidden">
        <button onClick={() => setShowBar((prev) => !prev)}>
          {showBar ? <CgClose size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <div
        className={`absolute left-0 bg-pink-200 w-full h-52 flex flex-col items-center lg:relative lg:flex-row lg:h-20 lg:top-0 duration-500 ${
          showBar ? "top-20" : "-top-56"
        }`}
      >
        <div className="w-[80%] lg:w-[50%] lg:mr-10 h-8 flex">
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-6 rounded-s-lg outline-none"
          />
          <button className="w-10 bg-white rounded-e-lg border-l flex justify-center items-center">
            <BsSearch size={18} />
          </button>
        </div>
        <ul className="lg:w-[35%] lg:flex flex-row justify-around">
          <li className="m-2 w-32 text-center">
            <Link to="/product" onClick={handleClick}>
              All Product
            </Link>
          </li>
          <li className="m-2 w-32 text-center">
            <Link to="/about" onClick={handleClick}>
              About Us
            </Link>
          </li>
          <li className="m-2 w-32 text-center">
            <Link to="/contact" onClick={handleClick}>
              Contact Us
            </Link>
          </li>
        </ul>
        {/* <ul className="flex w-[80%] lg:w-[15%] pt-8 lg:pt-0 justify-around">
          <li className= "w-32 py-1 text-center">
            <Link to="/login" onClick={handleClick}>
              Login
            </Link>
          </li>
          <li className="w-32 py-1 text-center">
            <Link to="/register" onClick={handleClick}>
              Register
            </Link>
          </li>
        </ul> */}
        <ul className="flex w-[80%] lg:w-[18%] p-4 lg:p-0 items-center justify-around">
          <li className="cursor-pointer relative">
            Cart{" "}
            <span className="absolute top-1">
              <FaCartShopping />
            </span>
          </li>
          <li
            className="cursor-pointer relative"
            onClick={() => setUserDropDown(!userDropDown)}
          >
            User
            <span className="absolute top-1">
              <FaRegUser />
            </span>
            <ul
              className={`absolute top-8 bg-pink-50 w-24 border rounded-md -left-2 ${
                userDropDown ? "block" : "hidden"
              }`}
              onMouseLeave={() => setUserDropDown(false)}
            >
              <li className="p-2 pl-2 hover:pl-4 duration-500 border-b">
                <Link to='/profile'>Profile</Link>
              </li>
              <li className="p-2 hover:pl-4 duration-500">LogOut</li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

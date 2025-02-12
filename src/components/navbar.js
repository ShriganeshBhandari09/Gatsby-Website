import { useState } from "react";
import menu_icon from "../images/menu_icon.png";
import dropdown_icon from "../images/dropdown_icon.png";
import logo from "../images/restaurant.png";
import { Link } from "gatsby";
import React from "react"
import { StaticImage } from "gatsby-plugin-image";


const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const handleNavbar = () => {
    setNavActive(!navActive);
  };
  return (
    <>
      <div className="flex justify-between items-center gap-4 py-4 px-3 sm:px-[5vw] lg:px-[9vw]">
        <div className="-mt-2">
          <Link to="/">
            <div className="flex gap-3 items-center justify-center">
              <StaticImage src={logo} alt="" className="w-10 lg:w-12" />
              <div className="text-center pt-[8px] lg:pt-[10px]">
                <p className="text-2xl lg:text-3xl font-Francois text-black">
                  HOME FEELS
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex gap-4 uppercase font-medium text-[#2A2A2A] text-base font-DMSans">
          <Link to="/">
            <p>Home</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden " />
          </Link>
          <Link to="/about">
            <p>About</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </Link>
          <Link to="/menu">
            <p>Menu</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </Link>
          <Link to="/contact">
            <p>Contact</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </Link>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <Link to="/table-booking">
            <button className="px-6 py-3 border text-black rounded-full hover:bg-green-600 hover:text-white transition duration-300 font-DMSans cursor-pointer">
              Book a Table
            </button>
          </Link>
          <div className="md:hidden">
            <img
              src={menu_icon}
              alt=""
              className="w-[18px] h-[18px] cursor-pointer"
              onClick={handleNavbar}
            />
          </div>
        </div>
      </div>
      <div>
        {navActive && (
          <div className="fixed top-0 left-0 bottom-0 w-full h-full bg-white md:hidden z-40">
            <div
              className="flex items-center cursor-pointer gap-2 px-2 py-2"
              onClick={handleNavbar}
            >
              <StaticImage src={dropdown_icon} alt="" className="w-3" />
              <p className="text-[20px]">Back</p>
            </div>
            <div className="flex flex-col px-0 font-DMSans">
              <Link to="/" onClick={() => setNavActive(false)}>
                <p className="border-2 border-b-0 p-2">Home</p>
              </Link>
              <Link to="/about" onClick={() => setNavActive(false)}>
                <p className="border-2 border-b-0 p-2">About</p>
              </Link>
              <Link to="/menu" onClick={() => setNavActive(false)}>
                <p className="border-2 border-b-0 p-2">Menu</p>
              </Link>
              <Link to="/contact" onClick={() => setNavActive(false)}>
                <p className="border-2 border-b-2 p-2">Contact</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

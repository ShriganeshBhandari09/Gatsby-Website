import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const handleNavbar = () => {
    setNavActive(!navActive);
  };
  return (
    <>
      <div className="flex justify-between items-center gap-4 py-4 px-[9vw]">
        <Link to="/">
          <div className="">
            <StaticImage src="../images/techpathshala.svg" className="w-full h-full"  />
          </div>
        </Link>

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
            <p>Hire from Us</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </Link>
          <Link to="/contact">
            <p >Contact us</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </Link>
          <Link to="/blog">
            <p>blog</p>
            <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
          </Link>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <Link to="/table-booking">
            <button className="px-6 py-3 border text-black rounded-full hover:bg-green-600 hover:text-white transition duration-300 font-DMSans cursor-pointer">
              Get Carrer Guidance
            </button>
          </Link>
          <div className="md:hidden">
            {/* <img
                src={menu_icon}
                alt=""
                className="w-[18px] h-[18px] cursor-pointer"
                onClick={handleNavbar}
              /> */}
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
              {/* <img src={dropdown_icon} alt="" className="w-3" /> */}
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

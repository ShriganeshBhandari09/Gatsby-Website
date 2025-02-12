import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDiscoverDropdownOpen, setIsDiscoverDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <Link to="/" className="text-black font-bold text-xl">
          <div className="">
            <StaticImage
              src="../images/techpathshala.svg"
              className="w-full h-full"
            />
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <Link to="/about" className="hover:text-yellow-500">
              About Us
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-yellow-500 flex items-center"
            >
              Our Programs ▾
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-52 bg-white border border-gray-300 rounded shadow-lg overflow-hidden">
                <li>
                  <Link
                    to="/fullstack"
                    className="block px-4 py-2 hover:bg-yellow-500"
                  >
                    Advanced Full Stack
                  </Link>
                </li>
                <li>
                  <Link
                    to="/backend"
                    className="block px-4 py-2 hover:bg-yellow-500"
                  >
                    Back-end Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/frontend"
                    className="block px-4 py-2 hover:bg-yellow-500"
                  >
                    Front-end Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/datascience"
                    className="block px-4 py-2 hover:bg-yellow-500"
                  >
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dataanalytics"
                    className="block px-4 py-2 hover:bg-yellow-500"
                  >
                    Data Analytics
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDiscoverDropdownOpen(!isDiscoverDropdownOpen)}
              className="hover:text-yellow-500 flex items-center"
            >
              Discover ▾
            </button>
            {isDiscoverDropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg overflow-hidden">
                <li>
                  <Link
                    to="/fullstack"
                    className="block px-4 py-2 hover:bg-yellow-500"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/frontend"
                    className="block px-4 py-2 hover:bg-yellow-500"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-yellow-500">
              Contact Us
            </Link>
          </li>
          <li>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-full">
              Get Career Guidance
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link to="/about" className="block py-2">
                About Us
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2"
              >
                Our Programs ▾
              </button>
              {isDropdownOpen && (
                <ul className="pl-4">
                  <li>
                    <Link to="/fullstack" className="block py-1">
                      Advanced Full Stack
                    </Link>
                  </li>
                  <li>
                    <Link to="/backend" className="block py-1">
                      Back-end Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/frontend" className="block py-1">
                      Front-end Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/datascience" className="block py-1">
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link to="/dataanalytics" className="block py-1">
                      Data Analytics
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/enquire" className="block py-2">
                Hire From Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="block py-2">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="block py-2">
                Contact Us
              </Link>
            </li>
            <li>
              <button className="w-full bg-yellow-500 text-black px-4 py-2 rounded-full">
                Get Career Guidance
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { StaticImage } from "gatsby-plugin-image";
import hero from "../images/header_img1.png";
// import { FaArrowRight } from "react-icons/fa6";
import React from "react"

const Hero = () => {
  return (
    <>
      <div className="w-full h-[80vh] overflow-hidden relative">
        <StaticImage src="../images/header_img1.png" alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="absolute top-[50%] left-[50%] z-20 transform -translate-x-1/2 -translate-y-1/2 text-center flex gap-6 flex-col justify-center items-center w-full font-PlayFair lg:max-w-3xl">
          <h1 className="text-white text-4xl font-bold md:text-5xl lg:text-6xl">
            Home Feels - Savor the Flavour
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-3xl">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven
          </p>
          <div className="flex gap-4 flex-col md:flex-row">
            <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2 cursor-pointer border font-DMSans">
              Book a Table
            </button>
            <button className="px-6 py-3 border text-white rounded-full hover:bg-green-600 hover:text-white transition duration-300 font-DMSans flex items-center justify-center gap-2 cursor-pointer">
              Explore Menu 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

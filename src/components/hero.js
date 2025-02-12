import * as React from "react";
import hero from "../images/banner-one.jpg";
const Hero = () => {
  return (
    <>
      <div className="w-full h-[80vh] overflow-hidden relative">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="absolute top-[50%] left-[25%] z-20 transform -translate-x-1/2 -translate-y-1/2 flex gap-10 flex-col w-full font-PlayFair lg:max-w-3xl">
          <h1 className="text-white text-4xl font-bold md:text-5xl lg:text-6xl flex gap-10">
            Learn <br/>Development <br/> by Doing Development
          </h1>
          <div className="flex gap-6 flex-col md:flex-row">
            <button className=" text-white rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2 cursor-pointer font-DMSans">
              Instagram
            </button>
            <button className="text-white hover:bg-green-600 hover:text-white transition duration-300 font-DMSans flex items-center justify-center gap-2 cursor-pointer">
              Youtube
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import heroThree from "../images/hero-three.jpg";
import React from "react"
const About = () => {
  return (
    <div className="px-3 sm:px-[5vw] lg:px-[9vw] flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
      <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl relative">
        <img
          src={heroThree}
          alt="Healthy food"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-30 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          <p className="text-white text-lg font-semibold">+91-123-456-7980</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-6 font-DMSans">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We provide healthy food for your family.
        </h2>
        <p className="text-gray-600">
          Our story began with a vision to create a unique dining experience
          that merges fine dining, exceptional service, and a vibrant ambiance.
          Rooted in the city&lsquo;s rich culinary culture, we aim to honor our
          local roots while infusing a global palate.
        </p>
        <p className="text-gray-600">
          At our place, we believe that dining is not just about food but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 cursor-pointer">
          More About Us
        </button>
      </div>
    </div>
  );
};

export default About;

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import heroOne from "../images/banner-one.jpg";
import heroTwo from "../images/banner-two.webp";
import heroThree from "../images/banner-three.webp";
import heroFour from "../images/banner-four.jpg";

const slides = [heroOne, heroTwo, heroThree, heroFour];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden mt-[60px] bg-black bg-opacity-80">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 md:px-12 z-10 w-full h-full bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 md:px-12 z-10 w-full h-full">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Learn <br />
          <span className="text-yellow-400">Development</span>
          <br />
          by Doing <span className="text-yellow-400">Development</span>
        </h1>
        <div className="flex gap-4 mt-10">
          <Link
            to="/programs"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            Explore Programs
          </Link>
          <Link
            to="/career-guidance"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            Get Career Guidance
          </Link>
        </div>
      </div>

      {/* Gradient Shadows
      <div className="absolute inset-0 w-3/5 bg-gradient-to-r from-black/70 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 w-3/5 bg-gradient-to-l from-black/70 to-transparent pointer-events-none right-0"></div> */}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-opacity ${
              index === currentSlide
                ? "bg-white opacity-100"
                : "bg-white opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

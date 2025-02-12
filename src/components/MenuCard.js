import { StaticImage } from "gatsby-plugin-image";
import React from "react"

const MenuCard = ({ category }) => {
  return (
    <div className="border-[1.5px] border-[#DBDFD0] rounded-xl flex items-center flex-col justify-center py-8 gap-6 font-DMSans">
      <div className="w-24 h-24 rounded-[50%] bg-gray-100 flex justify-center items-center">
        <StaticImage src={category.img} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-2xl leading-7 tracking-tighter text-center font-bold">
          {category.title}
        </h3>
        <p className="text-lg text-[#414536] leading-7 font-normal px-6 text-center line-clamp-4">
          {category.description}
        </p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 cursor-pointer">
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default MenuCard;

import Title from "./Title";
import tea from "../images/breakfast.svg";
import dish from "../images/dish.svg";
import drink from "../images/drink.svg";
import dessert from "../images/desert.svg";
import MenuCard from "./MenuCard";
import React from "react"


const Menu = () => {
  const category = [
    {
      img: tea,
      title: "Breakfast",
      description:
        "Start your day with a delightful range of fresh, healthy breakfasts, from classic options to modern twists that energize you for the day ahead.",
    },
    {
      img: dish,
      title: "Main Dishes",
      description:
        "Savor our flavorful main dishes crafted with the finest ingredients. From traditional favorites to contemporary creations, there's something for every taste.",
    },
    {
      img: drink,
      title: "Drinks",
      description:
        "Quench your thirst with our selection of refreshing beverages, including handcrafted juices, smoothies, and signature drinks to complement any meal.",
    },
    {
      img: dessert,
      title: "Desserts",
      description:
        "Indulge in our heavenly desserts, a perfect blend of sweetness and creativity. From decadent cakes to light pastries, every bite is a treat.",
    },
  ];
  return (
    <div className="pt-4 md:pt-6 lg:pt-8 px-3 sm:px-[5vw] lg:px-[9vw]">
      <Title title={"Browse Our Menu"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 mt-8 mb-8 md:py-8">
        {category.map((categ, index) => (
          <MenuCard category={categ} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

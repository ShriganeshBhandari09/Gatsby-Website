import burger from "../images/burger.jpg";
import chicken from "../images/chicken.jpg";
import french from "../images/french.jpg";
import cake from "../images/cake.jpg";
import pizza from "../images/pizza.jpg";
import Title from "./Title";
import React from "react"


const Blog = () => {
  const blogs = [
    {
      img: chicken,
      description: "How to prepare delicious chicken tenders",
      date: "January 3, 2023",
    },
    {
      img: french,
      description: "Tips for making perfect french fries",
      date: "January 5, 2023",
    },
    {
      img: cake,
      description: "Baking the most delicious cakes",
      date: "January 10, 2023",
    },
    {
      img: pizza,
      description: "Secrets to making a perfect pizza",
      date: "January 15, 2023",
    },
  ];

  return (
    <div className="pt-4 md:pt-6 lg:pt-8 px-3 sm:px-[5vw] lg:px-[9vw]">
      {/* <div className="flex justify-between items-center mb-6"> */}
      <Title title="Our Blog & Articles" />
      {/* </div> */}

      <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch pt-8 mt-8">
        {/* Left Feature Blog */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl flex flex-col border border-[#F9F9F7] bg-white shadow-xl">
          <img
            src={burger}
            alt="Healthy food"
            className="w-full h-[450px] object-cover"
          />
          <div className="p-4 flex flex-col gap-4 font-DMSans">
            <p className="text-[#737865] text-sm leading-5">January 3, 2023</p>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2c2f24]">
              The secret tips & tricks to prepare a perfect burger & pizza
            </h3>
            <p className="text-[#414536] text-[16px] leading-6 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              adipisci, magni cum fuga repudiandae porro neque rem autem sit ad
              odio. Nisi fugit dignissimos, temporibus facilis expedita magni
              reiciendis!
            </p>
          </div>
        </div>

        {/* Right Blog Grid */}
        <div className="hidden sm:grid w-full lg:w-1/2 grid-cols-1 sm:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="h-[260px] sm:h-[300px] overflow-hidden rounded-2xl flex flex-col border border-[#F9F9F7] bg-white shadow-xl"
            >
              <img
                src={blog.img}
                alt={`Blog ${index + 1}`}
                className="w-full h-[150px] sm:h-[180px] object-cover rounded-t-2xl"
              />
              <div className="p-4 flex flex-col gap-3 font-DMSans">
                <p className="text-[#737865] text-sm leading-5">{blog.date}</p>
                <h4 className="text-xl font-medium leading-6 text-[#2C2F24]">
                  {blog.description}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-8 md:py-8 mt-6">
        <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 cursor-pointer">
          Read All Articles
        </button>
      </div>
    </div>
  );
};

export default Blog;

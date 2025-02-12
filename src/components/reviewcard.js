import { StaticImage } from "gatsby-plugin-image";
import React from "react"

const ReviewsCard = ({ review }) => {
  return (
    <div className="bg-[#F9F9F7] rounded-lg flex flex-col gap-6 font-DMSans">
      <div className="border-b border-[#DBDFD0] mx-8 flex flex-col gap-4 py-8">
        <h3 className="text-2xl text-[#AD343E] leading-7 font-bold">
          &ldquo;{review.title}&quot;
        </h3>
        <p className="text-lg text-[#414536] leading-7 font-normal">
          {review.description}
        </p>
      </div>
      <div className="flex items-center pb-8 gap-6 px-8">
        <div className="w-16 rounded-[50%] overflow-hidden">
          <StaticImage src={review.img} alt="" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="leading-6 text-lg font-semibold text-[#2C2F24]">
            {review.name}
          </p>
          <p className="leading-6 font-normal">{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;

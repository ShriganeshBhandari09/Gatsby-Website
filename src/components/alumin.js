import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const AlumniSection = () => {
  const alumniData = [
    {
      name: "Amit Sharma",
      job: "Software Engineer at Google",
      image: "https://source.unsplash.com/400x300/?coding,technology",
      quote:
        "The hands-on training gave me the confidence to land my dream job at Google!",
    },
    {
      name: "Priya Verma",
      job: "Data Scientist at Microsoft",
      image: "https://picsum.photos/seed/picsum/200/300",
      quote:
        "Real-world projects helped me understand industry challenges better!",
    },
    {
      name: "Rajesh Kumar",
      job: "Product Manager at Amazon",
      image: "https://picsum.photos/seed/picsum/200/300",
      quote: "The program prepared me to take on leadership roles in tech!",
    },
  ];
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Meet Our Alumni
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Our graduates are making an impact in top companies worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {alumniData.map((alumni, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <StaticImage
                src={alumni.image}
                alt={alumni.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {alumni.name}
              </h3>
              <p className="text-gray-600">{alumni.job}</p>
              <blockquote className="mt-4 text-gray-700 italic">
                "{alumni.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;

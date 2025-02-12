import React from "react";

const ProgramSection = () => {
  const programs = [
    {
      title: "Full Stack Development",
      description:
        "Master front-end and back-end technologies with hands-on projects.",
      image: "https://source.unsplash.com/400x300/?coding,technology",
    },
    {
      title: "Data Science & AI",
      description: "Learn machine learning, AI, and data analysis techniques.",
      image: "https://source.unsplash.com/400x300/?data,analytics",
    },
    {
      title: "Cybersecurity",
      description:
        "Protect digital assets and learn ethical hacking techniques.",
      image: "https://source.unsplash.com/400x300/?security,hacking",
    },
    {
      title: "Cloud Computing",
      description: "Gain expertise in AWS, Azure, and cloud infrastructure.",
      image: "https://source.unsplash.com/400x300/?cloud,server",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Explore Our Programs
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose from industry-leading programs designed to prepare you for
          real-world challenges.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {program.title}
              </h3>
              <p className="text-gray-600 mt-2">{program.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

// import trainingVideo from '../assets/videos/training.mp4';
// import skillIndiaLogo from '../assets/images/skill-india.png';
// import startupIndiaLogo from '../assets/images/startup-india.png';
import { StaticImage } from "gatsby-plugin-image";
import React from "react"

const SimulationTraining = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Simulation-Based Training
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
        <p className="text-lg text-gray-700">
          Land Your Dream Job with Our Simulation-Based Training!
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Left Side - Text Content */}
        <div className="bg-white shadow-md rounded-lg p-6 md:w-1/2">
          <p className="text-lg text-gray-800">
            Simulation-based training is a hands-on learning method that mimics real work environments. It helps you
            learn by doing, giving you the confidence and experience needed to succeed in the professional world.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Trainees are placed in real-world job roles, gaining knowledge and experience.</li>
            <li>Trainees work on multiple projects under project managers, learning task management.</li>
            <li>Become industry-ready by delivering high-quality work under pressure.</li>
          </ul>

          {/* Logos */}
          <div className="flex gap-6 mt-6">
            <StaticImage src="https://picsum.photos/200" alt="Skill India" className="h-12" />
            <StaticImage src="https://picsum.photos/200" alt="Startup India" className="h-12" />
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="rounded-lg overflow-hidden md:w-1/2">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src={"trainingVideo"} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default SimulationTraining;

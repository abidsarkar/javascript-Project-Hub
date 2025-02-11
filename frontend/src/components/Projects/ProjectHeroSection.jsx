// responsive awy created
import { ArrowRight, Check } from "lucide-react";
import React from "react";

const ProjectHeroSection = () => {
  return (
    <div className="flex flex-col items-center  bg-white text-black px-1">
      {/* title */}
      <h1 className="font-semibold text-4xl md:text-7xl mt-10 text-center mb-12">
        Project Library
      </h1>
      {/* description */}
      <p className="text-center text-2xl font-bold underline">
        How to get start:
      </p>
      <div className="flex flex-col items-start mt-4">
        <div className="flex items-center space-x-2">
          <ArrowRight size={28} />
          <p className="text-center text-xs md:text-xl font-semibold">
            Choose a project from the list below
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <ArrowRight size={28} />
          <p className="text-center text-xs md:text-xl font-semibold">
            Click on the project to view more details
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <ArrowRight size={28} />
          <p className="text-center text-xs md:text-xl font-semibold">
            Click on the "View Sources" button to view the project
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Check size={28} />
          <p className="text-center text-xs md:text-xl font-bold">
            Enjoy coding and learning!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeroSection;

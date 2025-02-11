import React from "react";
import projectCollage from "../../assets/project-collage.webp";
const HeroSection = () => {
  return (
    <div>
      <div className="hero bg-[#FAEBD7] md:pt-24 md:pb-24 pt-9 pb-9">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="hidden md:block w-xl" src={projectCollage} />
          <div>
            <h1 className="text-black text-3xl md:text-5xl font-bold">
              Become a better <br /> frontend developer.
            </h1>
            <p className="text-black pt-6 text-xl md:text-2xl">
              Take your frontend skills to the next level by recreating{" "}
              <strong>real websites</strong> from{" "}
              <strong>real companies.</strong>
            </p>
            <p className="text-black pt-6 pb-4 text-xl md:text-2xl">
              The perfect type of practice for developers of all skill levels.
              Are you up for the challenge?
            </p>
            <a
              href="https://github.com/abidsarkar/javascript-mini-learning-project"
              target="_blank" // Opens link in a new tab (recommended)
              rel="noopener noreferrer" // Important for security when using target="_blank"
              className="btn btn-outline bg-white text-black hover:bg-black hover:text-white"
            >
              View Project
            </a>
            
            <button className="ml-5 btn btn-outline text-black hover:bg-black hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

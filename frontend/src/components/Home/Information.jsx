import React from "react";
import image1 from "../../assets/f990db40-ba07-479c-b52c-3b2c6caabc89_domain.avif";
import image2 from "../../assets/65eee214-bbfe-4f9e-ad0f-70f7785679be_layout.avif";
import image3 from "../../assets/8d3c1f70-6ff3-41f0-b9d6-3b46f2899359_pantone.avif";
import image4 from "../../assets/d6e88860-7347-4d32-acf8-aa1f01db8685_idea.avif";
import { NavLink } from "react-router";

const Information = () => {
  return (
    <div className="bg-white text-black py-12">
      {" "}
      {/* Added padding */}
      <div className="container mx-auto">
        {" "}
        {/* Added container for centering */}
        <h1 className="text-center text-3xl md:text-5xl font-bold leading-tight mb-6">
          {" "}
          {/* Improved heading styles */}
          Frontend Practice provides you with <br /> the inspiration and
          resources to create <br /> beautiful websites.
        </h1>
        <p className="text-center text-lg md:text-2xl font-normal mb-12 px-4 md:px-0">
          {" "}
          {/* Improved paragraph styles */}
          Here are some ways you can benefit <br /> from using our platform:
        </p>
        <div className="grid p-2 md:p-4 grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {" "}
          {/* Responsive grid */}
          <div className="bg-gray-400 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-center md:items-start gap-4">
            {" "}
            {/* Card styling */}
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
              src={image1}
              alt="Domain"
            />{" "}
            {/* Improved image styling */}
            <div>
              <h3 className="font-semibold text-lg text-center md:text-start mb-2">
                Enhance Your Skills
              </h3>{" "}
              {/* Added title */}
              <p className="text-center md:text-left">
                Build real websites selected for their educational value.
              </p>
            </div>
          </div>
          {/* ... (Repeat the card structure for image2, image3, and image4) */}
          <div className="bg-gray-400 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-center md:items-start gap-4">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
              src={image2}
              alt="Layout"
            />
            <div>
              <h3 className="font-semibold text-lg text-center md:text-start mb-2">
                Test Your Knowledge
              </h3>
              <p className="text-center md:text-left">
                Test and improve your frontend knowledge through various
                challenges.
              </p>
            </div>
          </div>
          <div className="bg-gray-400 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-center md:items-start gap-4">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
              src={image3}
              alt="Pantone"
            />
            <div>
              <h3 className="font-semibold text-lg text-center md:text-start mb-2">
                Save Time
              </h3>
              <p className="text-center md:text-left">
                Use the provided color palettes for each project to save time.
              </p>
            </div>
          </div>
          <div className="bg-gray-400 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-center md:items-start gap-4">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
              src={image4}
              alt="Idea"
            />
            <div>
              <h3 className="font-semibold text-lg text-center md:text-start mb-2">
                Find Resources
              </h3>
              <p className="text-center md:text-left">
                Find helpful, curated resources to tackle challenging elements.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          {" "}
          {/* Centered button container */}
          <h2 className="text-2xl font-bold mb-6">
            Ready to become a better frontend developer?
          </h2>
          <NavLink
            to="/project"
            className="text-black hover:text-white  btn btn-outline transition duration-300"
          >
            View Project
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Information;

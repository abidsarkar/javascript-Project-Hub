import React from "react";
import BlackBar from "../others/BlackBar";

const BlockHeroSection = () => {
  return (
    <div className="bg-amber-50 text-black py-2 px-1">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-semibold md:text-6xl md:font-bold  mb-8">
        Frontend Practice Blog
        </h1>
        <p className="text-center mb-21">
          Covering a wide range of topics, including project tutorials,
          responsive design, accessibility, testing, helpful tips, and more.
        </p>
      </div>
    </div>
  );
};

export default BlockHeroSection;

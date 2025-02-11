import React from "react";
import Navbar from "../Navbar/Navbar";
import FaqAccordion from "./FaqAccordion";
import Footer from "../Footer/Footer";

const FaqMain = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <div className="flex flex-col justify-center p-4">
        <h1 className="text-3xl md:text-5xl font-bold  mt-4 mb-2">
          Frequently Asked Question
        </h1>
        <FaqAccordion />
      </div>
      <Footer />
    </div>
  );
};

export default FaqMain;

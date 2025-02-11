import React from "react";
import Navbar from "../Navbar/Navbar";
import BlackBar from "../others/BlackBar";
import HeroSection from "./HeroSection";
import Information from "./Information";
import Footer from "../Footer/Footer";

const HomeMain = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BlackBar />
      <Information />
      <Footer />
    </div>
  );
};

export default HomeMain;

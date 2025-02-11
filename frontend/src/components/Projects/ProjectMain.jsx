import React from "react";
import Navbar from "../Navbar/Navbar";
import ProjectHeroSection from "./ProjectHeroSection";
import ProjectSearch from "./ProjectSearch";
import ProjectsCards from "./ProjectsCards";
import Footer from "../Footer/Footer";
import BlackBar from "../others/BlackBar";
import ProjectsCardsCopy from "./ProjectsCardsCopy";

const ProjectMain = () => {
  return (
    <div className="bg-white text-black px-1">
      <Navbar />
      {/* <BlackBar /> */}
      <ProjectHeroSection />
      {/* <ProjectSearch /> */}
      <p className="text-normal font-bold text-center mt-4 mb-4">
        There are no rules with these projects. Use any languages, libraries, or
        frameworks you want to recreate and learn from them.
      </p>
      <ProjectsCards />
      {/* <ProjectsCardsCopy/> */}
      <Footer />
    </div>
  );
};

export default ProjectMain;

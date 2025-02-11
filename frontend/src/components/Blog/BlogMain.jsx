import React from "react";
import Navbar from "../Navbar/Navbar";
import BlockHeroSection from "./BlockHeroSection";
import BlackBar from "../others/BlackBar";
import BlogCard from "./BlogCard";
import Footer from "../Footer/Footer";

const BlogMain = () => {
  return (
    <div className="bg-amber-50 text-black h-screen w-full">
      <Navbar />
      <BlackBar />
      <BlockHeroSection />
      <BlackBar />
      <BlogCard />
      <BlackBar />
      <BlogCard />
      <BlackBar />
      <BlogCard />
      <BlackBar />
      <div className="bg-amber-50 text-black h-26"></div>
      <Footer /> 
    </div>
  );
};

export default BlogMain;

import React from "react";
import { NavLink } from "react-router";

const BlogCard = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white text-black ">
      <NavLink to="/blog/first">
        <h2 className="text-sm md:text-2xl hover:underline cursor-pointer">
          Where to host your frontend projects.
        </h2>
      </NavLink>
      <div className="flex gap-2 items-center justify-center text-xs md:text-sm">
        <p className=" border px-1.5 py-1 bg-black text-white rounded-2xl">
          Hosting
        </p>
        <p className="border px-1.5 py-1 bg-black text-white rounded-2xl">
          Projects
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

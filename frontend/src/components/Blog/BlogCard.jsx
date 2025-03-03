import React from "react";
import { NavLink } from "react-router";
import BlackBar from "../others/BlackBar";

const BlogCard = () => {
  return (
    <div className="flex flex-col ">
      <BlackBar />
      <div className="flex justify-between items px-4 py-4 bg-white text-black ">
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
      <BlackBar />
      <div className="flex justify-between items-center px-4 py-2 bg-white text-black ">
        <NavLink to="/blog/second">
          <h2 className="text-sm md:text-2xl hover:underline cursor-pointer">
          How to quickly build your developer portfolio.
          </h2>
        </NavLink>
        <div className="flex gap-2 items-center justify-center text-xs md:text-sm">
          <p className=" border px-1.5 py-1 bg-black text-white rounded-2xl">
            Tips
          </p>
          <p className="border px-1.5 py-1 bg-black text-white rounded-2xl">
          Portfolio
          </p>
        </div>
      </div>
      <BlackBar />

      <div className="flex justify-between items-center px-4 py-2 bg-white text-black ">
        <NavLink to="/blog/third">
          <h2 className="text-sm md:text-2xl hover:underline cursor-pointer">
          Frontend Practice and how it works.
          </h2>
        </NavLink>
        <div className="flex gap-2 items-center justify-center text-xs md:text-sm">
          <p className=" border px-1.5 py-1 bg-black text-white rounded-2xl">
            Projects
          </p>
          <p className="border px-1.5 py-1 bg-black text-white rounded-2xl">
            How-to
          </p>
        </div>
      </div>
      <BlackBar />
    </div>
  );
};

export default BlogCard;

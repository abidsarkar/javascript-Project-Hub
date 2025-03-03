import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import BlackBar from "../../others/BlackBar";
import { NavLink } from "react-router";

const SecondBlog = () => {
  return (
    <div className=" bg-white text-black h-screen w-full ">
      <Navbar />
      <div className="min-h-screen flex flex-col bg-white text-black">
        <div className="max-w-3xl mx-auto p-8 bg-white ">
          <h2 className="text-4xl md:text-7xl font-bold mb-6 mt-6 text-gray-900 text-center">
            How to Quickly Build Your Developer Portfolio
          </h2>
          <BlackBar />
          <p className="mb-6 text-gray-700 mt-4 text-xl">
            Building a new developer portfolio can seem daunting and it's easy
            to continuously delay going live. I've been there and know how
            frustrating it can be. But not to worry, I have some tips to help
            you cross the finish line and publish your portfolio.
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            First and foremost, start.
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            It may sound simple, but this is the most important piece of advice
            I can give you. No one but you is going to create your portfolio.
            So, get started!
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Before you start coding, pick a theme.
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            Having a theme in mind while building can significantly speed up the
            creation of your portfolio. Stick to it!
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            When in doubt, look for inspiration.
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            Looking at websites other developers and designers have created can
            be an invaluable source of both inspiration and knowledge. One of my
            favorite resources is{" "}
            <a
              href="https://www.siteinspire.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Siteinspire
            </a>
            .
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Write your content before building a new page.
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            Before you start on a new page, try writing down your content or
            most of it. It will speed up the building process.
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Finish one part and quickly move to the next.
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            Avoid making constant changes to the same section. Get your basic
            layout, colors, and content setup, then move on.
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Projects: If you're proud of it, include it.
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            Ask yourself: "Am I proud of this project?" If yes, then add it to
            your portfolio.
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Set a [soft] deadline.
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            Set a soft deadline and try your best to stick to it, but be
            realistic.
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Share your progress.
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            Sharing with friends and family, or on social media is a great
            motivator to finish your portfolio.
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Most importantly, have fun with it.
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            Try not to overthink it. This is your little slice of the internet,
            make it uniquely yours.
          </p>

          <h3 className="text-2xl font-semibold mb-3 text-gray-900">
            And finally, go live!
          </h3>
          <p className="mb-6 text-gray-700">
            Take a deep breath, pat yourself on the back, and hit that publish
            button!
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
            <p className="mb-3 text-gray-800">
              Join our newsletter and get the latest Frontend Practice updates.
            </p>
            <NavLink to={"/error"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Subscribe
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SecondBlog;

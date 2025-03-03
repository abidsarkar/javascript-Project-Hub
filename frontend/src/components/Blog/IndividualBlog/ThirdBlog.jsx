import React from "react";
import { NavLink } from "react-router";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import BlackBar from "../../others/BlackBar";

const ThirdBlog = () => {
  return (
    <div className=" bg-white text-black h-screen w-full ">
      <Navbar />
      <div className="min-h-screen flex flex-col bg-white text-black">
        <div className="max-w-3xl mx-auto p-8 bg-white ">
          <h2 className="text-4xl md:text-7xl font-bold mb-6 mt-6 text-gray-900 text-center">
            Frontend Practice and how it works.
          </h2>
          <BlackBar />
          <p className="mb-6 text-gray-700 mt-4 text-xl">
            At Frontend Practice, we believe there is great value in recreating
            real websites as a form of coding practice. With our large
            collection of hand-picked projects to choose from, there's something
            for everyone, no matter your skill level. <br /> <br /> One
            advantage of this particular type of coding practice is that you can
            use any technology you prefer, including HTML, CSS, JavaScript, or
            your favorite framework or library.
          </p>

          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            To get started:
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            Create a new HTML, CSS, and JavaScript file and begin recreating the
            web pages that are featured in our projects. If you prefer to work
            with a specific framework or library, you can install the package of
            your choice with the command line and start building.
            <br />
            <br />
            Each project on Frontend Practice comes with a recommended course
            and helpful resources, including color palettes, reference images,
            and links to free photo assets and icons.
            <br />
            <br />
            We also provide a list of what you can learn from each project and
            unique challenges specific to each project, making it easy for you
            to focus on the skills you want to improve.
          </p>
          <p>img</p>
          <p className="mb-6 text-gray-700 text-xl">
            If you're just starting with frontend development, we recommend
            starting with the Level 1 projects, which focus on basic layouts,
            color choices, and simple animations. As you progress, you can move
            on to Level 2 projects, which offer a wider variety of designs,
            interactive elements, and more advanced animations.
            <br />
            <br />
            And if you're feeling confident and ready to push your skills to the
            next level, you can tackle the Level 3 projects, which are some of
            the most complex and challenging projects on the site.
          </p>
          <p>IMG</p>
          <p className="mb-6 text-gray-700 text-xl">
            No matter your skill level, Frontend Practice has something to
            offer. So don't hesitate to dive in and start practicing – the only
            way to improve is through hands-on experience and hard work. So,
            start your journey today and become an even better frontend
            developer!
          </p>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Last but not least:
          </h3>
          <p className="mb-6 text-gray-700 text-xl">
            After building a project or two, showcase your skills and projects
            by creating your own portfolio website. Check out our article,{" "}
            <NavLink to={"/second"} className="text-blue-600 underline">
              "How to quickly build your developer portfolio"
            </NavLink>
            for helpful tips.
            <br />
            Until next time, happy coding!
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
            <p className="mb-3 text-gray-800">
              Join our newsletter and get the latest Frontend Practice updates.
            </p>
            <NavLink
              to={"/error"}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThirdBlog;

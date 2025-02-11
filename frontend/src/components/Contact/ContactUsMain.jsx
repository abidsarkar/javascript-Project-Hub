import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ContactUsMain = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50 text-black">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8 gap-2">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-left mb-2">
          You may find that our FAQ page has the answers that you are looking
          for. If not, feel free to reach out!
        </p>
        <form className="bg-gray-400 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-black mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">Message</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsMain;

import React from 'react'
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const FirstBlog = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
          <Navbar />
          <main className="flex-1 max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Where to Host Your Frontend Projects</h1>
            <p className="mb-4">
              As a frontend developer, you usually need an easy-to-use and reliable hosting
              platform to start deploying and showcasing your projects. With so many hosting
              options available, it can be challenging to choose the right platform for your
              needs. So let's compare four of our favorite options: Netlify, Vercel, GitHub
              Pages, and Surge.sh.
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold">Netlify</h2>
              <blockquote className="italic bg-black text-white p-4 text-center">“The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.”</blockquote>
              <p className="mt-2">Netlify is a hosting platform that provides a range of features...</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Continuous deployment with Git integration</li>
                <li>Custom domains and HTTPS support</li>
                <li>Automatic builds and deploy previews</li>
                <li>Serverless functions and form handling</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold">Vercel</h2>
              <blockquote className="italic bg-black text-white p-4 text-center">“Vercel is the platform for frontend developers...”</blockquote>
              <p className="mt-2">Vercel is a hosting platform that specializes in hosting frontend projects...</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold">GitHub Pages</h2>
              <blockquote className="italic bg-black text-white p-4 text-center">“Hosted directly from your GitHub repository...”</blockquote>
              <p className="mt-2">GitHub Pages is a free service provided by GitHub...</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold">Surge</h2>
              <blockquote className="italic bg-black text-white p-4 text-center">“Simple, single-command web publishing...”</blockquote>
              <p className="mt-2">Surge.sh is a simple static web publishing service...</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold">Conclusion</h2>
              <p className="mt-2">
                There are a lot of hosting provider options for developers nowadays and it can be hard to choose the best one...
              </p>
            </section>
            
            <div className="bg-gray-400 p-4 rounded-lg text-center mt-6">
              <p>Join our newsletter and get the latest Frontend Practice updates...</p>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">Subscribe</button>
            </div>
          </main>
          <Footer />
        </div>
      );
    };

export default FirstBlog
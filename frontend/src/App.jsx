import "./App.css";

import ProjectMain from "./components/Projects/ProjectMain";
import HomeMain from "./components/Home/HomeMain";
import BlogMain from "./components/Blog/BlogMain";
import FirstBlog from "./components/Blog/IndividualBlog/FirstBlog";
import ContactUsMain from "./components/Contact/ContactUsMain";
import FaqMain from "./components/FAQ/FaqMain";
import { Routes } from "react-router";
import { Route } from "react-router";
import Error from "./components/others/Error";

import ProjectDetails from "./components/Projects/ProjectDetails";
import SecondBlog from "./components/Blog/IndividualBlog/SecondBlog";
import ThirdBlog from "./components/Blog/IndividualBlog/ThirdBlog";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomeMain />} />
        <Route path="/project" element={<ProjectMain />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/blog/first" element={<FirstBlog />} />
        <Route path="/blog/second" element={<SecondBlog />} />
        <Route path="/blog/third" element={<ThirdBlog />} />
        <Route path="/contact" element={<ContactUsMain />} />
        <Route path="/faq" element={<FaqMain />} />
        <Route path="/error" element={<Error />} />
       
        <Route path="/*" element={<Error />} />

      </Routes>
      
    </>
  );
}

export default App;

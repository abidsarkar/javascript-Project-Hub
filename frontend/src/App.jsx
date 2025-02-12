import "./App.css";
import BlackBar from "./components/others/BlackBar";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Home/HeroSection";
import Information from "./components/Home/Information";
import Navbar from "./components/Navbar/Navbar";
import ProjectHeroSection from "./components/Projects/ProjectHeroSection";
import ProjectMain from "./components/Projects/ProjectMain";
import HomeMain from "./components/Home/HomeMain";
import BlogMain from "./components/Blog/BlogMain";
import FirstBlog from "./components/Blog/IndividualBlog/FirstBlog";
import ContactUsMain from "./components/Contact/ContactUsMain";
import FaqMain from "./components/FAQ/FaqMain";
import { Routes } from "react-router";
import { Route } from "react-router";
import Error from "./components/others/Error";
import ProjectUpload from "./components/Upload/Uploads";
import ProjectDetails from "./components/Projects/ProjectDetails";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomeMain />} />
        <Route path="/project" element={<ProjectMain />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/blog/first" element={<FirstBlog />} />
        <Route path="/contact" element={<ContactUsMain />} />
        <Route path="/faq" element={<FaqMain />} />
        <Route path="/error" element={<Error />} />
        <Route path="/upload" element={<ProjectUpload />} />
        <Route path="/*" element={<Error />} />

      </Routes>
      {/* 1.Home */}
      {/* <HomeMain /> */}
      {/* 2.project */}
      {/* <ProjectMain/> */}
      {/* 3.Blog  */}
      {/* <BlogMain /> */}
      {/* 4.individual blog */}
      {/* <FirstBlog /> */}
      {/* 5.Contact page for user */}
      {/* <ContactUsMain /> */}
      {/* 6.FAQ with accordion */}
      {/* <FaqMain /> */}
    </>
  );
}

export default App;

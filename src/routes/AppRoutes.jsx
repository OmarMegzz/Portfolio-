import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Features/Home/Home";
import About from "../Features/About/About";
import Skills from "../Features/Skills/Skills";
import Projects from "../Features/Projects/Projects";
import ContactMe from "../Features/Contact me/ContactMe";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

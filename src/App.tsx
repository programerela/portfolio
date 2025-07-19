import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TechSlider from "./components/TechSlider/TechSlider";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
useEffect(() => {
    window.scrollTo(0, 0);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        const id = target.getAttribute("href")!.substring(1);
        const section = document.getElementById(id);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, "", `#${id}`); // update hash without jumping
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <TechSlider />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

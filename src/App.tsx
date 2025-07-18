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

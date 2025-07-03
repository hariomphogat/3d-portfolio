import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import Education from "./sections/Education";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import StartupLoader from "./components/StartupLoader";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      {/* <StartupLoader /> */}
      <Navbar />
      <Hero />
      <Showcase />
      <FeatureCards />
      <Education />
      <TechStack />
      <LogoSection />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

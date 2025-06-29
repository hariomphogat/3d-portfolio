import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import Education from "./sections/Education";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <FeatureCards />
      <Education />
      <TechStack />
      <LogoSection />
    </>
  );
};

export default App;

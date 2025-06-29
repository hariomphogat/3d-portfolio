import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import Education from "./sections/Education";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <FeatureCards />
      <Education />
      <LogoSection />
    </>
  );
};

export default App;

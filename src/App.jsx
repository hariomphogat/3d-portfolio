import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
    </>
  );
};

export default App;

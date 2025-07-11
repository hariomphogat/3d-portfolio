import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import Education from "./sections/Education";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./index.css";
import { DeviceProvider } from "./context/DeviceProvider";

const App = () => {
  return (
    <>
      <DeviceProvider>
        <Navbar />
        <Hero />
        <Showcase />
        <FeatureCards />
        <Education />
        <TechStack />
        <LogoSection />
        <Contact />
        <Footer />
      </DeviceProvider>
    </>
  );
};

export default App;

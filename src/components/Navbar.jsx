import React, { useEffect, useState } from "react";
import { navLinks } from "../constants/index";

const Navbar = () => {
  // State to track if the navbar is scrolled
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled down
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          <div className="flex flex-row gap-2 items-center">
            <span>
              <img
                src="/icons/apple-touch-icon.png"
                alt="HP"
                className="h-8 w-8 rounded-full object-cover"
              />
            </span>
            <span>Hariom Phogat</span>
          </div>
        </a>
        <nav className="desktop">
          <ul className="">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span> {name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span> Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

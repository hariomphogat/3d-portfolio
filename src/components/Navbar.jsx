import React, { useEffect, useState } from "react";
import { navLinks } from "../constants/index";
import ExportPdf from "./ExportPdf";

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          <div
            style={{ fontFamily: '"Baskervville SC", serif' }}
            className="flex flex-row gap-2 items-center"
          >
            <span>
              <img
                src="/images/hp-gold-logo.webp"
                alt="HP logo"
                className="h-8 w-8 rounded-full object-cover"
                height={64}
                width={64}
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
        <div className="flex flex-row gap-6 items-center justify-end">
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span> Contact me</span>
            </div>
          </a>
          <div className="hidden lg:block">
            <ExportPdf />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

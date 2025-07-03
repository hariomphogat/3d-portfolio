import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const DownloadButton = () => {
  // refs for button and icon
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const icon = iconRef.current;

    const handleMouseOver = () => {
      gsap.fromTo(
        icon,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          duration: 2,
          opacity: 1,
          ease: "power1.in",
          repeatDelay: 3,
          stagger: 0.3,
          repeat: -1,
        }
      );
    };

    button.addEventListener("mouseover", handleMouseOver);

    // remove event Listener
    return () => {
      button.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="h-12 w-72 lg:h-18 lg:w-72 btn-base btn-gradient-dark btn-shadow-inner btn-hover-glow btn-active-glow"
    >
      <a
        href="/hariom_phogat_resume.pdf"
        download="hariom_phogat_resume.pdf"
        rel="noopener noreferrer"
        className="text-white text-xl lg:text-2xl font-sans flex items-center justify-center"
      >
        <img
          ref={iconRef}
          src="/images/arrows-down.png"
          alt="download icon"
          className=" inline-block mr-2 h-6 w-6"
        />
        Download Resume
      </a>
    </button>
  );
};

export default DownloadButton;

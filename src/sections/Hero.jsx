import React, { useRef } from "react";
import { words } from "../constants/index";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  const heroTextRef = useRef(null);

  useGSAP(() => {
    if (!heroTextRef.current) return;

    gsap.fromTo(
      heroTextRef.current.querySelectorAll("h1"),
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 1.3,
        duration: 1,
        ease: "power2.out",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.webp" alt="Background" loading="eager" />
      </div>
      <div className="hero-layout">
        {/* Left:Hero Content*/}
        <header
          ref={heroTextRef}
          className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5"
        >
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          loading="eager"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliever Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Hariom Phogat, a Developer based in India with a passion
              for code.
            </p>
            <Button
              className="md:w-96 md:h-16 w-[315px] h-12"
              text="Explore my portfolio"
              id="counter"
            />
          </div>
        </header>
        {/* Right: 3D Model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      {/* animated counter */}
      <AnimatedCounter />
    </section>
  );
};

export default Hero;

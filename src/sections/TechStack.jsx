import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TechIcon from "../components/Models/TechLogos/TechIcon";

const TechStack = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    if (!cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.Out",
        stagger: 0.2,
        force3D: true,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
          once: true,
        },
      }
    );
  });
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 section-padding">
        <TitleHeader
          title="My Preferred Tech Stack"
          subtitle="🤝 The Skills I Bring to the table"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon, index) => (
            <div
              key={icon.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>

                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

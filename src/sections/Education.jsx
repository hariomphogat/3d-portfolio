import React from "react";
import TitleHeader from "../components/TitleHeader";
import { eduCards } from "../constants";
import GlowCard from "../components/GlowCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Move this helper outside
const isLowEndDevice = () => {
  return navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
};

const Education = () => {
  useGSAP(() => {
    if (isLowEndDevice()) {
      ScrollTrigger.disable();
      return;
    }

    // Animate each timeline card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        x: -50,
        duration: 0.6,
        ease: "power2.out",
        force3D: true,
        delay: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          onEnter: () => (card.style.willChange = "transform, opacity"),
          onLeave: () => (card.style.willChange = "auto"),
          onLeaveBack: () => (card.style.willChange = "auto"),
          onEnterBack: () => (card.style.willChange = "auto"),
        },
      });
    });

    // Animate the vertical timeline
    gsap.to(".timeline", {
      scaleY: 0,
      transformOrigin: "bottom bottom",
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-wrapper",
        start: "top 90%",
        end: "bottom top+=200",
        scrub: true,
      },
    });

    // Animate text blocks
    gsap.utils.toArray(".eduText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.2,
        force3D: true,
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          toggleActions: "play none none none",
          onEnter: () => (text.style.willChange = "opacity"),
          onLeave: () => (text.style.willChange = "auto"),
          onLeaveBack: () => (text.style.willChange = "auto"),
          onEnterBack: () => (text.style.willChange = "auto"),
        },
      });
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="education"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Educational Qualifications"
          subtitle="🎓 My Road to Knowledge"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {eduCards.map((card, index) => (
              <div key={card.title} className="edu-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}></GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="eduText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" loading="lazy" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50/80">
                          📍 {card.address}
                        </p>
                        <p className="my-5 text-white-50">📅 {card.date}</p>
                        <p className="text-[#839cb5] italic">
                          Skills & Focus Areas
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.learnings.map((learning) => (
                            <li key={learning} className="text-lg">
                              {learning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

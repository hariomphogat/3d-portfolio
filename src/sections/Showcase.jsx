import React, { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useDeviceContext } from "../context/useDeviceContext";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const { canRenderHeavy, isChecking } = useDeviceContext();

  // UseCallback so function reference remains stable
  const addToRefs = useCallback((el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  }, []);

  useGSAP(() => {
    if (isChecking || !canRenderHeavy) {
      return;
    }
    // Section fade-in
    canRenderHeavy &&
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.inOut" }
      );

    // Animate each project card on scroll
    canRenderHeavy &&
      projectRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            delay: index * 0.2, // Staggered delay for each card
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              id: `project-${index}`,
              toggleActions: "play none none none",
            },
          }
        );
      });
    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll()?.forEach((trigger) => trigger.kill());
    };
  }, [canRenderHeavy]);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div ref={addToRefs} className="first-project-wrapper">
            <a
              href="https://codeoverflow-rose.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper bg-[#f2e3f7] rounded-xl ">
                <img
                  src="/images/project1.webp"
                  alt="codeoverflow"
                  className="w-auto h-full object-center items-center"
                  loading="lazy"
                  width="1800"
                  height="760"
                />
              </div>
              <div className="text-content">
                <h2>
                  CodeOverflow - A One-Stop Platform for Developer Q&A,
                  Portfolios, & Job Discovery
                  <span className="inline-block ml-2 ">
                    <img
                      src="/images/elinkgrad.webp"
                      alt="hyperlink"
                      className="w-auto h-[32px] object-bottom items-baseline"
                      loading="lazy"
                      width="64"
                      height="64"
                    />
                  </span>
                </h2>
                <p className="text-white-50 md:text-xl">
                  A web app built with Next.js, TypeScript, MongoDB, Clerk, &
                  Tailwind CSS.
                </p>
              </div>
            </a>
          </div>

          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div ref={addToRefs} className="project">
              <a
                href="https://threads-clone-liart.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-wrapper bg-[#e9c9a3] ">
                  <img
                    src="/images/project2.webp"
                    alt="Threads"
                    loading="lazy"
                    className="w-auto h-full object-center items-center"
                    width="753"
                    height="450"
                  />
                </div>
                <h2>
                  Threads – Clone Project
                  <span className="inline-block ml-2 ">
                    <img
                      src="/images/elinkgrad.webp"
                      alt="hyperlink"
                      className="w-auto h-[32px] object-bottom items-baseline"
                      loading="lazy"
                      width="64"
                      height="64"
                    />
                  </span>
                </h2>
              </a>
            </div>

            <div ref={addToRefs} className="project">
              <a
                href="https://github.com/hariomphogat/React_Admin_Dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-wrapper bg-[#ffe7eb] ">
                  <img
                    src="/images/project3.webp"
                    alt="Dashboard"
                    loading="lazy"
                    className="w-auto h-full object-center items-center"
                    width="753"
                    height="600"
                  />
                </div>
                <h2>
                  Modern Admin Dashboard
                  <span className="inline-block ml-2">
                    <img
                      src="/images/elinkgrad.webp"
                      alt="hyperlink"
                      className="w-auto h-[32px] object-bottom items-baseline"
                      loading="lazy"
                      width="64"
                      height="64"
                    />
                  </span>
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

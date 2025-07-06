import React, { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  // UseCallback so function reference remains stable
  const addToRefs = useCallback((el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  }, []);

  useGSAP(() => {
    // Section fade-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.inOut" }
    );

    // Animate each project card on scroll
    projectRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
            id: `project-${index}`,
            once: true, // Only animate once
          },
        }
      );
    });
    // Ensure positions are recalculated if layout changes after mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div ref={addToRefs} className="first-project-wrapper ">
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
                  Portfolios, and Job Discovery
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
                <h2>Threads – Clone Project</h2>
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
                <h2>Modern Admin Dashboard</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

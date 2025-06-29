import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  // Clear project refs on each render
  projectRefs.current = [];

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

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
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
            id: `project-${index}`,
          },
        }
      );
    });

    ScrollTrigger.refresh(); // Ensure positions are recalculated
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
              <div className="image-wrapper bg-[#f2e3f7] rounded-xl">
                <img
                  src="/images/project1.png"
                  alt="codeoverflow"
                  className="w-auto h-full object-center items-center"
                />
              </div>
              <div className="text-content">
                <h2>
                  CodeOverflow - A One-Stop Platform for Developer Q&A,
                  Portfolios, and Job Discovery
                </h2>
                <p className="text-white-50 md:text-xl">
                  A web app built with Next.js, TypeScript, MongoDB, Clerk, and
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
                <div className="image-wrapper bg-[#e9c9a3]">
                  <img src="/images/project2.png" alt="Threads" />
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
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="/images/project3.png" alt="Dashboard" />
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

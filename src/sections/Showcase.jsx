import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const Project1Ref = useRef(null);
  const Project2Ref = useRef(null);
  const Project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      Project1Ref.current,
      Project2Ref.current,
      Project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.inOut" }
    );
  }, []);
  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div ref={Project1Ref} className="first-project-wrapper ">
            <a
              href="https://codeoverflow-rose.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper bg-[#f2e3f7] rounded-xl ">
                <img
                  src="/images/project1.png"
                  alt="codeoverflow"
                  className="max-md:object-contain object-fit"
                />
              </div>
              <div className="text-content">
                <h2>
                  CodeOverflow - A One-Stop Platform for Developer Q&A,
                  Portfolios, and Job Discovery
                </h2>
                <p className="text-white-50 md:text-xl">
                  A web app built with Next.js, TypeScript, MongoDB, Clerk, and
                  Tailwind CSS for a lightning-fast, user-friendly experience.
                </p>
              </div>
            </a>
          </div>
          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            {/* project 2 */}
            <div ref={Project2Ref} className="project">
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
            {/* project 3 */}
            <div ref={Project3Ref} className="project">
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

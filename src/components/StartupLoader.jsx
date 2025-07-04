import React, { useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import CountUp from "react-countup";

const StartupLoader = ({ onFinish }) => {
  const loaderRef = useRef();
  const { progress } = useProgress();
  const roundedProgress = Math.floor(progress);

  // slides up after completition
  useEffect(() => {
    if (progress >= 100) {
      const tl = gsap.timeline({
        delay: 0.5,
        onComplete: () => {
          if (onFinish) onFinish();
        },
      });

      tl.to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });
    }
  }, [progress, onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center z-[9999]"
    >
      {/* Rolling number container */}
      <div className=" flex items-center justify-center">
        <div className="text-9xl md:text-[180px] font-light text-white">
          <CountUp
            start={0}
            end={100}
            redraw={false}
            duration={100 / roundedProgress}
          />
        </div>
      </div>

      <p className="text-base md:text-lg lg:text-xl text-gray-300 mt-4">
        Preparing your experience...
      </p>
    </div>
  );
};

export default StartupLoader;

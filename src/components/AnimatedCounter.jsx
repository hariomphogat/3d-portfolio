import React, { useEffect, useRef, useState } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  const [start, setStart] = useState(false);
  const counterRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observerRef.current.observe(counterRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
            style={{ willChange: "transform, opacity" }} // Hint for smoother number transitions
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp
                start={start ? undefined : 0}
                suffix={item.suffix}
                end={item.value}
                redraw={false}
              />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;

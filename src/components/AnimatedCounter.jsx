import React, { useEffect, useRef, useState } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  //  This component animates a counter that counts up to specified values when it comes into view.
  // It uses Intersection Observer to detect when the counter is in view and starts the counting animation
  const [start, setStart] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={counterItems.lable}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              {/* CountUp component animates the number counting up to the specified value */}
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

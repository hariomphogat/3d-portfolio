import React, { useRef, useCallback, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const GlowCard = ({ card, children }) => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const cardRef = useRef(null);
  const animationFrameRef = useRef(null);

  const calculateAngle = (mouseX, mouseY) => {
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    return (angle + 360) % 360;
  };
  // handle mouse move event
  const handleMouseMove = useCallback(
    (e) => {
      const currentCard = cardRef.current;
      if (!currentCard || isMobileOrTablet) return;

      const updateGlow = () => {
        const rect = currentCard.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        const angle = calculateAngle(mouseX, mouseY);
        currentCard.style.setProperty("--start", angle + 60);
      };

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(updateGlow);
    },
    [isMobileOrTablet]
  );

  // handle mouse leave event
  const handleMouseLeave = useCallback(() => {
    if (isMobileOrTablet) return; //only stop if on desktop

    // Cancel any pending animation frame for the glow position update
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, [isMobileOrTablet]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <img key={i} src="/images/star.webp" alt="Star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;

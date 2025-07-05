import React, { useRef, useCallback, useEffect } from "react";

const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null);
  const animationFrameRef = useRef(null);

  const calculateAngle = (mouseX, mouseY) => {
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    return (angle + 360) % 360;
  };

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    const updateGlow = () => {
      const rect = cardRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      const angle = calculateAngle(mouseX, mouseY);
      cardRef.current.style.setProperty("--start", angle + 60);
    };

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(updateGlow);
  }, []);

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

import React, { useState } from "react";

const ExportPdf = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX - 50, y: e.clientY + 22 });
  };

  return (
    <>
      <a
        href="/hariom_resume.pdf"
        download="hariom_resume.pdf"
        rel="noopener noreferrer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src="/images/exportpdf.webp"
          alt="download icon"
          className="inline-block mr-2 h-10 w-10 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
        />
      </a>

      {visible && (
        <div
          className={`
            fixed px-2 py-1 bg-black text-white text-sm rounded 
            pointer-events-none whitespace-nowrap z-50
            transition-opacity duration-200
            ${visible ? "opacity-100" : "opacity-0"}
          `}
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
        >
          Download resume
        </div>
      )}
    </>
  );
};

export default ExportPdf;

import React from "react";
import { logoIconsList } from "../constants/index.js";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item items-baseline">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className={`h-[32px] w-${icon.width}`}
        loading="lazy"
      />
    </div>
  );
};
const LogoSection = () => {
  // Duplicate the logo icons to create a continuous marquee effect
  const extendedIconList = [...logoIconsList, ...logoIconsList];
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-36 lg:h-52">
        <div className="marquee-box gap-5">
          {extendedIconList.map((icon, index) => (
            <LogoIcon key={`${icon.name}-first-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;

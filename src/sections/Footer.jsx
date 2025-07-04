import React from "react";
import { socialImgs } from "../constants";
import DownloadButton from "../components/DownloadButton";

const Footer = () => {
  return (
    <footer className="footer h-48">
      <div className="footer-container">
        {/* Logo */}
        <div className="flex flex-col justify-between items-center md:items-start gap-4 ">
          <div className="flex flex-row justify-center items-center">
            <img
              src="/images/hpwhitelogo.png"
              alt="logo"
              className="h-20 w-auto"
            />
            <h1
              style={{ fontFamily: '"Baskervville SC", serif' }}
              className="text-white text-4xl text-center font-bold ml-2.5 items-center"
            >
              Hariom Phogat
            </h1>
          </div>
          <div>
            <p className="text-center md:text-end text-white">
              &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
        {/* Social Links */}
        <div className="social flex flex-row gap-2 justify-center items-center ">
          {socialImgs.map((img) => (
            <a key={img.url} className="icon" target="blank" href={img.url}>
              <img
                src={img.imgPath}
                className="object-fill hover:shadow-white-50 shadow-2xl h-[40px] w-[40px] rounded-xl hover:scale-110 transition-all duration-300 ease-in-out"
                alt={img.name}
                loading="lazy"
              />
            </a>
          ))}
        </div>
        {/* Resume Download Button */}
        <div className="flex flex-col justify-center items-center xl:items-end">
          <DownloadButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

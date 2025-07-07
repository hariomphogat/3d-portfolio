import { useState, useEffect } from "react";
import { DeviceContext } from "./DeviceContext";

export const DeviceProvider = ({ children }) => {
  const [canRenderHeavy, setCanRenderHeavy] = useState(undefined);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
      const isMobileOrTabletUA =
        /Mobi|Android|iPhone|iPad|iPod|Tablet|BlackBerry|IEMobile|Opera Mini/i.test(
          ua
        );
      const isWidthMobileOrTablet = window.innerWidth <= 1024;
      const isMobileOrTablet = isMobileOrTabletUA || isWidthMobileOrTablet;

      if (!isMobileOrTablet) {
        const cores = navigator.hardwareConcurrency || 4;
        const memory = navigator.deviceMemory || 4;
        const lowEnd = cores <= 4 || memory <= 4;
        setCanRenderHeavy(!lowEnd);
      } else {
        setCanRenderHeavy(false);
      }
      setIsChecking(false);
    };

    checkDevice();
  }, []);

  return (
    <DeviceContext.Provider value={{ canRenderHeavy, isChecking }}>
      {children}
    </DeviceContext.Provider>
  );
};

import { useContext } from "react";
import { DeviceContext } from "./DeviceContext";

export const useDeviceContext = () => useContext(DeviceContext);

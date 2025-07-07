import { createContext } from "react";

export const DeviceContext = createContext({
  canRenderHeavy: undefined,
  isChecking: true,
});

import { createContext } from "react";

export const PositionContext = createContext({
  setPersonalPicRect: () => {},
  personalPicRect: {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  },
});

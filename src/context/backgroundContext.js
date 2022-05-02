import { createContext } from 'react';

export const BackgroundContext = createContext({
  isAnimationOn: false,
  toggleAnimation: () => {},
});

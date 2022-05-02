import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import Container from './components/Container';
import Card from './components/Card';
import { AppContainer } from './style';
import { BackgroundContext } from './context/backgroundContext';
import { useLocalStorage } from './hooks/useLocalStorage';

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

function App({ runAnimation }) {
  const [isAnimationOn, setIsAnimationOn] = useLocalStorage('isAnimationOn', true);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
    if (isAnimationOn) {
      runAnimation();
    } else {
      const background = document.getElementById("background-animation");

      if (background) {
        background.remove();
      }
    }
  }, [isAnimationOn, runAnimation])

  const backgroundContextData = {
    isAnimationOn,
    toggleAnimation: () => {
      setIsAnimationOn(!isAnimationOn);
    }
  }

  return (
    <BackgroundContext.Provider value={backgroundContextData}>
      <AppContainer>
        <Container>
          <Card />
        </Container>
      </AppContainer>
    </BackgroundContext.Provider>
  );
}

export default App;

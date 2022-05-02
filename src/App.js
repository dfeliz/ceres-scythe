import React, { useEffect } from 'react';

import Container from './components/Container';
import Card from './components/Card';
import { AppContainer } from './style';
import { BackgroundContext } from './context/backgroundContext';
import { useLocalStorage } from './hooks/useLocalStorage';

function App({ runAnimation }) {
  const [isAnimationOn, setIsAnimationOn] = useLocalStorage('isAnimationOn', true);

  useEffect(() => {
    if (isAnimationOn) {
      runAnimation();
    } else {
      document.getElementById("background-animation").remove();
    }
  }, [isAnimationOn])

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

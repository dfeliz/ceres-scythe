import React, { useState } from 'react';

import { AppContainer, CardContainer } from './style';
import { PositionContext } from './context/position';
import {
  Card,
  Christmas,
} from './components';

function App() {
  const [personalPicRect, setPersonalPicRect] = useState({});
  const [opacity, setOpacity] = useState(0);
  
  setTimeout(() => setOpacity(1), 1000)
  
  const positionContextValues = {
    personalPicRect,
    setPersonalPicRect,
  };
  
  return (
    <AppContainer>
      <CardContainer style={{ opacity }}>
        <PositionContext.Provider value={positionContextValues}>
          <Christmas personalPicRect={personalPicRect} />
          <Card />
        </PositionContext.Provider>
      </CardContainer>
    </AppContainer>
  );
}

export default App;

import React from 'react';
import Container from './components/Container';
import Card from './components/Card';
import { AppContainer } from './style';
import AnalyticsContext from './context/analytics';

function App({ analyticsInstance }) {
  return (
    <AnalyticsContext.Provider value={analyticsInstance} >
      <AppContainer>
        <Container>
          <Card />
        </Container>
      </AppContainer>
    </AnalyticsContext.Provider>
  );
}

export default App;

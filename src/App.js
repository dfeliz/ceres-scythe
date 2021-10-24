import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import Container from './components/Container';
import Card from './components/Card';
import { AppContainer } from './style';

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
      <AppContainer>
        <Container>
          <Card />
        </Container>
      </AppContainer>
  );
}

export default App;

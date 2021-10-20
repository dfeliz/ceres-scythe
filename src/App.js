import React from 'react';
import Container from './components/Container';
import Card from './components/Card';
import { AppContainer } from './style';

function App() {
  return (
    <AppContainer>
      <Container>
        <Card />
      </Container>
    </AppContainer>
  );
}

export default App;

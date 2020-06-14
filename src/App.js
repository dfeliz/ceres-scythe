import React from 'react';
import Container from './components/Container';
import Card from './components/Card';
import ParticleBackground from './components/ParticleBackground';
import { AppContainer } from './style'
import './App.css';

function App() {
  return (
    <AppContainer>
        <ParticleBackground>
          <Container>
            <Card/>
          </Container>
        </ParticleBackground>
    </AppContainer>
  );
}

export default App;

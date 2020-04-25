import React from 'react';
import Container from './components/Container';
import Card from './components/Card';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  return (
    <div className="App">
        <ParticleBackground>
          <Container>
            <Card/>
          </Container>
        </ParticleBackground>
    </div>
  );
}

export default App;

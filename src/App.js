import React from 'react';
import Container from './components/Container';
import Card from './components/Card';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <ParticleBackground>
          <Container>
            <Card/>
          </Container>
        </ParticleBackground>
        <Footer/>
    </div>
  );
}

export default App;

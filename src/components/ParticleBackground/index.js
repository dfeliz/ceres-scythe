import React from 'react';
import Particles from 'react-particles-js';
import './style.css';

const getParticleNumber = () => {
  if (window.innerWidth <= 500) return 40;
  if (window.innerWidth <= 900) return 80;
  return 140;
};

const ParticleBackground = (props) => (
  <>
    {props.children}
    <Particles
      className="Particle-bg"
      params={{
        particles: {
          number: {
            value: getParticleNumber(),
          },
          size: {
            value: 2,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  </>
);

export default ParticleBackground;

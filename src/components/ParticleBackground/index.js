import React from 'react';
import Particles from 'react-particles-js';
import './style.css';

const ParticleBackground = (props) => (
    <>
        {props.children}
        <Particles
            className="Particle-bg"
            params={{
            "particles": {
                "number": {
                    "value": 140
                },
                "size": {
                    "value": 2
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }}/>
    </>
)

export default ParticleBackground;
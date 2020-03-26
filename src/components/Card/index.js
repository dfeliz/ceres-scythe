import React from 'react';
import ProfileImage from '../../static/res/IMG_8980.jpg';
import './style.css';

const Card = () => (
    <div className="Card">
        <div className="LeftCard">
            <img 
                src={ProfileImage}
                alt="Me"
                className="Image"
            />
        </div>
        <div className="RightCard">
            <div className="UpperCard">
                <h3 className="CardTitleText">
                    Hi!
                </h3>
                <h3 className="CardTitleText">
                    I'm Daniel Feliz,
                </h3>
                <h3 className="CardTitleText">
                    software developer.
                </h3>
            </div>
            <div className="LowerCard">
                <p>
                    Currently working at Soluciones GBH.
                </p>
            </div>
        </div>
    </div>
)

export default Card;
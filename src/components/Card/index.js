import React from 'react';
import './style.css';

const Card = () => (
    <div className="Card">
        <div className="LeftCard">
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
        <div className="RightCard">
            <img 
                src="https://gbh.com.do/wp-content/uploads/2019/05/03-1.jpg"
                alt="Me"
                className="Image"
            />
        </div>
    </div>
)

export default Card;
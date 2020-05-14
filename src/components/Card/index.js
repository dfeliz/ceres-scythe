import React from 'react';

import {
    steamIcon,
    githubIcon,
    linkedinIcon,
} from '../../static/res/icons';
import Constants from './constants';
import ContactBubble from '../ContactBubbles';
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
                    {Constants.TEXT.GREETING}
                </h3>
            </div>
            <div className="LowerCard">
                <p>
                    {Constants.TEXT.PARAGRAPH}
                </p>
            </div>
            <div className="Contact">
                <ContactBubble
                    url="https://github.com/dfeliz"
                    icon={githubIcon}
                    text="Github"
                    color=""
                />
                <ContactBubble
                    url="https://www.linkedin.com/in/daniel-feliz-2b1688159/"
                    icon={linkedinIcon}
                    text="LinkedIn"
                    color=""
                />
                {/* <ContactBubble
                    url="https://steamcommunity.com/id/foxxo990"
                    icon={steamIcon}
                    text="Steam"
                    color=""
                /> */}
            </div>
        </div>
        
    </div>
)

export default Card;
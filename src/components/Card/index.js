import React, { useContext, useState } from 'react';

import { githubIcon, linkedinIcon } from '../../static/res/icons';
import Constants from './constants';
import ContactBubble from '../ContactBubbles';
import ProfileImage from '../../static/res/IMG_8980.jpg';
import {
  WideContainer,
  CardContainer,
  PersonalPic,
  RightCard,
  UpperCard,
  LeftCard,
  LowerCard,
  Contact,
} from './style';
import BackgroundToggler from '../BackgroundToggle';
import { BackgroundContext } from '../../context/backgroundContext';

const Card = () => {
  const [opacity, setOpacity] = useState(0);
  const { isAnimationOn, toggleAnimation } = useContext(BackgroundContext);

  setTimeout(() => {
    setOpacity(1);
  }, 1000)
  
  return(
    <>
      <CardContainer style={{ opacity }}>
        <LeftCard>
          <PersonalPic src={ProfileImage} alt="Me" />
        </LeftCard>
        <RightCard>
          <UpperCard>
            <h3>{Constants.TEXT.GREETING}</h3>
          </UpperCard>
          <LowerCard>
            <p>
              {Constants.TEXT.PARAGRAPH}
              {Constants.TEXT.NAME}
              {Constants.TEXT.REST}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gbh.com.do"
                style={{ color: "#ff7700"}}
              >
                {Constants.TEXT.COMPANY}
              </a>
              {Constants.TEXT.END}
            </p>
          </LowerCard>
          <Contact>
            <ContactBubble
              url="https://github.com/dfeliz"
              icon={githubIcon}
              text="Github"
              color=""
            />
            <ContactBubble
              url="https://www.linkedin.com/in/dafeliz/"
              icon={linkedinIcon}
              text="LinkedIn"
              color=""
            />
          </Contact>
        </RightCard>
      </CardContainer>
      <WideContainer>
        <BackgroundToggler
          opacity={opacity}
          text="Background animation"
          isOn={isAnimationOn}
          onChange={toggleAnimation}
        />
      </WideContainer>
    </>
  );
}

export default Card;

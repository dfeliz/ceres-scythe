import React, { useState } from 'react';

import { blogIcon, githubIcon, linkedinIcon } from '../../static/res/icons';
import Constants from './constants';
import ContactBubble from '../ContactBubbles';
import ProfileImage from '../../static/res/IMG_8980.jpg';
import {
  CardContainer,
  PersonalPic,
  RightCard,
  UpperCard,
  LeftCard,
  LowerCard,
  Contact,
} from './style';

const Card = () => {
  const [opacity, setOpacity] = useState(0);

  setTimeout(() => {
    setOpacity(1);
  }, 1000)
  
  return(
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
            {/* TODO: Add a cool interaction with this click */}
            {/* <span style={{ color: "#ff7700"}}> */}
              {Constants.TEXT.NAME}
            {/* </span> */}
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
            url="https://blog.dfeliz.dev"
            icon={blogIcon}
            text="Blog"
            color="#94004A"
          />
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
  );
}

export default Card;

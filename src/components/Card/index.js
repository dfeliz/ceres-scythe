import React from 'react';

import { ContactBubble } from "../";
import Constants from './constants';
import ProfileImage from '../../static/res/IMG_8980.jpg';
import { githubIcon, linkedinIcon } from '../../static/res/icons';

import {
  CardContainer,
  RightCard,
  UpperCard,
  LeftCard,
  LowerCard,
  Contact,
} from './style';

import {
  PersonalPicBubble,
} from '../';

const Card = () => {
  return(
    <CardContainer>
      <LeftCard>
        <PersonalPicBubble src={ProfileImage} alt="Me" />
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

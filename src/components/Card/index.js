import React from "react";

import { githubIcon, linkedinIcon } from "../../static/res/icons";
import Constants from "./constants";
import ContactBubble from "../ContactBubbles";
import ProfileImage from "../../static/res/IMG_8980.jpg";
import {
  CardContainer,
  PersonalPic,
  RightCard,
  UpperCard,
  LeftCard,
  LowerCard,
  Contact,
} from "./style";

const Card = () => (
  <CardContainer>
    <LeftCard>
      <PersonalPic src={ProfileImage} alt="Me" />
    </LeftCard>
    <RightCard>
      <UpperCard>
        <h3>{Constants.TEXT.GREETING}</h3>
      </UpperCard>
      <LowerCard>
        <p>{Constants.TEXT.PARAGRAPH}</p>
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

export default Card;

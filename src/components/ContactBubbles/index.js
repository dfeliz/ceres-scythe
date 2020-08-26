import React from 'react';
import { Bubble, ContactBubbleContainer } from './style';

const ContactBubble = ({
  url, icon, text, color,
}) => (
  <ContactBubbleContainer>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Bubble style={{ backgroundColor: color }}>
        <img src={icon} alt="contact-bubble-icon" className="BubbleIcon" />
      </Bubble>
      <p>{text}</p>
    </a>
  </ContactBubbleContainer>
);

export default ContactBubble;

import React from 'react';
import ReactGA from 'react-ga';
import { Bubble, ContactBubbleContainer } from './style';

const trackOnClick = (url) => {
  ReactGA.event({
    category: 'Action',
    action: 'Click',
    label: url,
  });
};

const ContactBubble = ({
  url, icon, text, color,
}) =>(
  <ContactBubbleContainer>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackOnClick(url)}
    >
      <Bubble style={{ backgroundColor: color }}>
        <img src={icon} alt="contact-bubble-icon" className="BubbleIcon" />
      </Bubble>
      <p>{text}</p>
    </a>
  </ContactBubbleContainer>
);

export default ContactBubble;

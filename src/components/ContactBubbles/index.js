import React from 'react';
import './style.css';

const ContactBubble = ({
  url,
  icon,
  text,
  color,
}) => (
  <div className="ContactBubbleContainer">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="Bubble" style={{ backgroundColor: color }}>
        <img
          src={icon}
          alt="contact-bubble-icon"
          className="BubbleIcon"
        />
      </div>
      <div className="ContactBubbleText">
        {text}
      </div>
    </a>
  </div>
);

export default ContactBubble;

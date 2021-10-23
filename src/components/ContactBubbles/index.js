import React, { useContext } from 'react';
import { Bubble, ContactBubbleContainer } from './style';
import AnalyticsContext from '../../context/analytics';

const trackOnClick = (analyticsInstance, url) => {
  console.log("Tracked ", url);
  analyticsInstance.event({
    category: 'Action',
    action: 'Click',
    label: url,
  });
};

const ContactBubble = ({
  url, icon, text, color,
}) => {
  const analyticsInstance = useContext(AnalyticsContext);

  return (
    <ContactBubbleContainer>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackOnClick(analyticsInstance, url)}
      >
        <Bubble style={{ backgroundColor: color }}>
          <img src={icon} alt="contact-bubble-icon" className="BubbleIcon" />
        </Bubble>
        <p>{text}</p>
      </a>
    </ContactBubbleContainer>
  );
}

export default ContactBubble;

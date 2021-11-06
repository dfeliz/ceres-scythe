import React, { useEffect, useContext, useRef } from 'react';
import { PositionContext } from '../../context/position';
import { PersonalPic } from './style';

const PersonalPicBubble = ({ src, alt, ...props }) => {
  const { setPersonalPicRect } = useContext(PositionContext);
  const personalPicRef = useRef(null);

  useEffect(() => {
    const updateComponentLocation = () => {
      const { current } = personalPicRef;
      if (current) {
        setPersonalPicRect(current.getBoundingClientRect());
      }
    };
    window.addEventListener('resize', updateComponentLocation);
    return () => window.removeEventListener('resize', updateComponentLocation);
  }, [setPersonalPicRect]); 

  useEffect(() => {
    setPersonalPicRect(personalPicRef.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PersonalPic
      src={src}
      alt={alt}
      {...props}
      ref={personalPicRef}
    />
  );
};

export default PersonalPicBubble;

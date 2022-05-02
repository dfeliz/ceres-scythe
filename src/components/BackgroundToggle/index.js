import React from 'react';
import Toggle from 'react-toggle';
import { TogglerContainer } from "./style";

const BackgroundToggler = ({
  text,
  isOn,
  opacity,
  onChange,
}) => {

  return (
    <TogglerContainer onClick={onChange} opacity={opacity}>
      <label
        htmlFor='background-toggle'
        style={{ cursor: "pointer"}}
      >{text}</label>
      <Toggle
        id="background-toggle"
        icons={false}
        checked={isOn}
        onChange={onChange}
        className="custom-toggle"
      />
    </TogglerContainer>
  )
}

export default BackgroundToggler;

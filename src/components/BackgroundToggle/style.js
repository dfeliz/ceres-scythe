import styled from 'styled-components';

export const TogglerContainer = styled.div`
  z-index: 1;
  display: flex;

  border: 0px;
  padding: 16px;
  font-size: 16px;
  cursor: pointer;

  opacity: ${props => props.opacity};
  backdrop-filter: blur(6px);
  background-color: #00000088;
  transition: opacity 1.5s, filter 1.5s linear;

  &:hover {
    background-color: #33333388;
  }

  & > label {
    color: #AAAAAA;
    margin-right: 8px;
    pointer-events: none;
  }
`

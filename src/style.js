import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #282c34;
  color: white;
  overflow: hidden;

  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    color: #cecece;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: opacity 1.5s, filter 1.5s linear;
`;

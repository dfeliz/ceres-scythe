import styled from 'styled-components';

export const CardContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  backdrop-filter: blur(6px);
  background-color: #00000088;
  padding: 60px 60px 60px 68px;

  h3 {
    margin: 0;
    font-size: 80px;
    font-weight: 200;
    white-space: nowrap;
  }

  @media (max-width: 1600px) {
    h3 {
      margin: 0;
      font-size: 60px;
      font-weight: 200;
    }
  }

  @media (max-width: 1250px) {
    h3 {
      margin: 0;
      font-size: 45px;
      font-weight: 200;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    width: 375px;
    height: 86vh;
    background-color: #00000008;
    h3 {
      text-align: center;
    }
  }
`;

export const RightCard = styled.div`
  flex: 2;
  margin-left: 20px;
  @media (min-width: 1250px) {
    padding-right: 120px;
  }
  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const UpperCard = styled.div`
  text-align: left;
  margin-top: 35px;
`;

export const LeftCard = styled.div`
  flex: 1;
`;

export const LowerCard = styled.div`
  margin-top: 25px;
  text-align: left;
  font-size: 24px;
  font-weight: 200;

  @media (max-width: 500px) {
    padding: 0 12px;
    p {
      text-align: center;
      font-size: 22px;
    }
  }
`;

export const Contact = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  height: 120px;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

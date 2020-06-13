import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #000000aa;
  z-index: 1;
  padding: 60px 60px 60px 68px;
  display: flex;
  flex-direction: row;

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
    padding: 0px;
    width: 375px;
    overflow-y: scroll;

    h3 {
      text-align: center;
    }
  }
`;

export const PersonalPic = styled.img`
  margin-top: 5vh;
  border-radius: 50%;
  width: 290px;
  height: 280px;

  @media (max-width: 1600px) {
    margin-top: 5vh;
    border-radius: 50%;
    width: 220px;
    height: 210px;
  }

  @media (max-width: 1250px) {
    margin-top: 5vh;
    border-radius: 50%;
    width: 190px;
    height: 180px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    margin-bottom: 15px;
  }
`;

export const RightCard = styled.div`
  flex: 2;
  margin-left: 20px;

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

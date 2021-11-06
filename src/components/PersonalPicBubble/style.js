import styled from 'styled-components';

export const PersonalPic = styled.img`
  margin-top: 4vh;
  border-radius: 50%;
  width: 290px;
  height: 280px;

  @media (max-width: 1250px) {
    margin-top: 5vh;
    border-radius: 50%;
    width: 220px;
    height: 210px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    margin-bottom: 15px;
  }
`;

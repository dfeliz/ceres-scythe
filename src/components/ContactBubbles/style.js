import styled from "styled-components";

export const ContactBubbleContainer = styled.div`
  display: flex;
  margin-right: 18px;
  flex-direction: column;
  justify-content: center;

  p {
    line-height: 27px;
    text-align: center;
  }
`;

export const Bubble = styled.div`
  width: 60px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
  }
`;

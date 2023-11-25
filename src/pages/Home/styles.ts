import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const HomeContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 20px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    margin: 10px;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 100px 40px 100px;
  box-sizing: border-box;
  height: 100%;
  flex-direction: row;

  @media (max-width: 480px) {
    display: flex;
    gap: 2vw;
    padding: 10px;
    div {
      padding: 1vw;
    }

    img {
      width: 100%;
    }
  }
`;

export const Title = styled.text`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  flex-direction: row;
  font-size: 48px;
  font-weight: 400;

  @media (max-width: 480px) {
    display: flex;
    font-size: 36px;
    text-align: center;
  }
`;

export const Subtitle = styled.text`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  flex-direction: row;
  color: ${Theme.colors.lightGrey};

  font-size: 24px;
  font-weight: 400;

  @media (max-width: 480px) {
    display: flex;
    font-size: 20px;
    text-align: center;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 1vw;
  width: 100%;

  h2 {
    font-size: 2vw;
    font-weight: 400;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 2vw;
  gap: 2vw;
  width: 100%;

  h1 {
    font-size: 1vw;
    font-weight: 600;
  }
  h2 {
    font-size: 1vw;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    padding: 1vw;
    gap: 1vw;
    width: 100%;

    img {
      width: 30%;
    }

    h1 {
      font-size: 3vw;
      font-weight: 600;
    }
    h2 {
      font-size: 3vw;
      font-weight: 400;
    }
  }
`;

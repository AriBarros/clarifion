import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 24px;
  padding: 15px;
  background-color: ${Theme.colors.grey};
`;

export const LogoArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px 30px 80px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const Title = styled.text`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  flex-direction: row;

  font-size: 48px;
  font-weight: 400;
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
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  gap: 25px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-direction: row;

  h2 {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const Step = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  flex-direction: row;

  h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;

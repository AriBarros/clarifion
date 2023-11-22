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

export const IconArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h2 {
    font-style: ${Theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    color: ${Theme.colors.white};
  }
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

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.colors.grey};
  padding: 20px;
  h2 {
    font-style: ${Theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    color: ${Theme.colors.white};
  }
  div {
    padding: 20px 100px 20px 40px;
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

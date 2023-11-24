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

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 300px 50px 300px;
  padding: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  height: 100%;
  background-color: ${Theme.colors.darkerWhite};
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  align-items: flex-start;

  text {
    font-size: 32px;
    font-weight: 500;
    text-align: justify;

    span.highlight {
      color: ${Theme.colors.lightBlue};
    }
  }
`;

export const ContentText = styled.div`
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
`;

export const ProductText = styled.div`
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  align-items: center;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  flex-direction: row;

  span {
    font-size: 14px;
    font-weight: 400;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
    text-align: justify;
  }
`;
export const ProductStock = styled.div`
  display: flex;
  gap: 10px;

  span {
    color: ${Theme.colors.black} !important;
    font-size: 20px !important;
    font-weight: 400;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-basis: auto;
  width: 100%;
  flex-direction: row;
  gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;

  text {
    text-decoration: line-through;
    color: ${Theme.colors.grey};
    font-size: 20px;
  }
  span {
    color: ${Theme.colors.lightBlue};
    font-size: 22px;
    font-weight: 400;
  }
`;

export const CheckArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  span {
    font-size: 18px !important;
  }
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  padding: 15px;
  background-color: ${Theme.colors.lighterBlue};
  width: 100%;
  span {
    font-size: 20px !important;
  }
  b {
    color: ${Theme.colors.lightBlue};
    font-weight: 400;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  gap: 20px;
  border-radius: 50px;
  padding: 15px;
  background-color: ${Theme.colors.lightGreen};
  width: 100%;

  Button {
    font-size: 24px !important;
    color: ${Theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: "none";
    width: 100%;
    height: 100%;
    gap: 20px;
  }
  span {
    font-size: 24px !important;
    color: ${Theme.colors.white};
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.colors.grey};
  padding: 20px;
  span {
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

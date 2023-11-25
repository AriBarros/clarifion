import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 100px 50px 100px;
  padding: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  height: 100%;
  background-color: ${Theme.colors.darkerWhite};
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    text {
      font-size: 26px !important;
      text-align: center !important;
    }
  }
`;

export const CommentSection = styled.div`
  border-radius: 10px;
  display: flex;
  gap: 30px;
  padding: 20px;
  flex-direction: column;
  align-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: ${Theme.colors.white};

  b {
    font-size: 18px;
  }
  span {
    font-size: 20px;
  }
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

  @media (max-width: 600px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
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

  @media (max-width: 600px) {
    font-size: 14px;
    padding-left: 0px;
    padding-right: 0px;

    text {
      font-size: 20px;
    }
    h3 {
      text-align: center;
    }
  }
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
  box-sizing: border-box;
  gap: 10px;

  span {
    color: ${Theme.colors.black} !important;
    font-size: 20px !important;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    span {
      font-size: 16px !important;
    }
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-basis: auto;
  width: 100%;
  flex-direction: row;
  gap: 30px;
  justify-content: space-between;
  box-sizing: border-box;
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

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 0px;

    text {
      font-size: 16px;
    }
    span {
      font-size: 18px;
    }
  }
`;

export const CheckArea = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  span {
    font-size: 18px !important;
  }

  @media (max-width: 600px) {
    gap: 20px;
    span {
      font-size: 14px !important;
    }
  }
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
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

  @media (max-width: 600px) {
    span {
      font-size: 18px !important;
    }
  }
`;

export const Button = styled.button`
  font-size: 24px !important;
  color: ${Theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;

  @media (max-width: 600px) {
    font-size: 20px !important;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  box-sizing: border-box;
  gap: 20px;
  border-radius: 50px;
  padding: 15px;
  background-color: ${Theme.colors.lightGreen};
  width: 100%;
`;

export const BadgeArea = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
  width: 100%;
  text-transform: uppercase;

  span {
    font-size: 24px;
    color: ${Theme.colors.red};
    cursor: pointer;
    position: relative;
    /* text-decoration: underline; // , without underline  */

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: ${Theme.colors.red};
    }
  }

  @media (max-width: 600px) {
    padding: 5px;
    span {
      font-size: 20px;
    }
  }
`;

export const BadgeContent = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: flex;
  align-items: center;
  gap: 20px;
  padding: 50px 15px 15px 15px;
  width: 100%;

  span {
    font-size: 22px;
    color: ${Theme.colors.black};
  }

  @media (max-width: 600px) {
    padding: 0px;
    span {
      font-size: 16px;
    }
  }
`;

import styled from "styled-components";
import { Theme } from "../../styles/theme";

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

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
`;

export const CommentSection = styled.div`
  border-radius: 10px;
  display: flex;
  gap: 30px;
  padding: 20px;
  flex-direction: column;
  align-content: flex-start;
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
  cursor: pointer;

  Button {
    font-size: 24px !important;
    color: ${Theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
  }
  span {
    font-size: 24px !important;
    color: ${Theme.colors.white};
  }
`;

export const BadgeArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
  width: 100%;

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
`;

export const BadgeContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  width: 100%;

  span {
    font-size: 16px;
    color: ${Theme.colors.black};
  }
`;

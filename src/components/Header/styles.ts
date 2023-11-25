import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 24px;
  padding: 30px;
  background-color: ${Theme.colors.grey};

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const IconArea = styled.div`
  display: flex;
  box-sizing: border-box;
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

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 50px;
`;

export const SliderArrow = styled.div`
  font-size: 26px;
  cursor: pointer;
  background-color: ${Theme.colors.primary};
  color: ${Theme.colors.white};
  padding: 8px;
  border-radius: 50%;
  margin: 0 10px;
  user-select: none;

  &:hover {
    background-color: ${Theme.colors.primaryDark};
  }
`;

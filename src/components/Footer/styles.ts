import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const Container = styled.div`
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

  @media (max-width: 600px) {
    span {
      font-size: 16px;
    }
    div {
      padding: 20px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

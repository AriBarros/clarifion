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

import { mediaQuery } from "@/core/uiKit/contants/mediaQuery";
import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: auto;
  padding: 32px;
  @media ${mediaQuery.md} {
    margin-right: 100px;
    padding: 0;
  }
  .name {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media ${mediaQuery.md} {
      display: grid;
      grid-template-columns: 48% 48%;
      gap: 13px;
    }
  }
  .title {
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
    font-size: 16px;
    @media ${mediaQuery.md} {
      text-align: right;
      font-size: 18px;
    }
  }

  .btn {
    width: 100px;
    align-self: center;
    margin-top: 16px;
    @media ${mediaQuery.md} {
      align-self: flex-end;
      margin-top: 8px;
      width: 120px;
    }
  }
`;

import { mediaQuery } from "@/core/uiKit/contants/mediaQuery";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  top: 0;
  left: 0;
  z-index: 10;
  height: 40px;
  padding: 24px;
  @media ${mediaQuery.md} {
    padding-left: 44px;
    padding-right: 28px;
    height: 90px;
  }
  .title {
    display: none;
    @media ${mediaQuery.md} {
      display: inline;
    }
  }
  .user {
    display: flex;
    gap: 4px;
    font-size: 13px;
    font-weight: 500;
    min-height: 30px;
    align-items: center;
    cursor: pointer;
  }
`;

import { mediaQuery } from "@/core/uiKit/contants/mediaQuery";
import styled from "styled-components";

export const StyledThridDiscountLayoutLayout = styled.div`
  .select-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
    padding-left: 32px;
    @media ${mediaQuery.md} {
      width: 420px;
      gap: 16px;
      padding-left: 0;
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

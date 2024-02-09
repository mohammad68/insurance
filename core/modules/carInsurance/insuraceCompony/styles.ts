import { mediaQuery } from "@/core/uiKit/contants/mediaQuery";
import styled from "styled-components";

export const StyledInsuranceComponyLayout = styled.div`
  .select-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 32px;
    padding-left: 32px;
    @media ${mediaQuery.md} {
      width: 420px;
      gap: 16px;
      padding-left: 0;
    }
  }
`;

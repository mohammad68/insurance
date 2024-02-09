import { mediaQuery } from "@/core/uiKit/contants/mediaQuery";
import styled from "styled-components";

export const StyledVehicelTypesLayout = styled.div`
  .select-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 32px;
    padding-left: 32px;
    @media ${mediaQuery.md} {
      grid-template-columns: 1fr 1fr;
      width: 420px;
      gap: 16px;
      padding-left: 0;
    }
  }
`;

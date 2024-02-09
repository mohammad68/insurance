import { COLORS } from "@/core/uiKit/contants/colors";
import { mediaQuery } from "@/core/uiKit/contants/mediaQuery";
import styled from "styled-components";

export const StyledFormSectionContainer = styled.div`
  margin: 70px 32px 32px 0;
  .sub-title {
    font-size: 14px;
    color: ${COLORS.gray["500"]};
    margin: 16px 0;
    @media ${mediaQuery.md} {
      margin: 32px 0;
    }
  }
  .title {
    font-size: 16px;
    font-weight: 500;
  }

  @media ${mediaQuery.md} {
    margin-right: 100px;
    margin-top: 0;

    .title {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

import { mediaQuery } from "@/core/uiKit/contants/mediaQuery";
import styled from "styled-components";

export const StyledAppLayout = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  @media ${mediaQuery.md} {
    height: calc(100vh - 90px);
    margin-top: 90px;
    flex-direction: row;
  }

  .form-container {
    width: auto;
    @media ${mediaQuery.md} {
      width: 46%;
    }
  }

  .left-side-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    @media ${mediaQuery.md} {
      position: relative;
      align-items: flex-end;
      width: 54%;
    }
    .solid-bg {
      width: 50%;
      background: #fffbeb;
      display: none;
      @media ${mediaQuery.md} {
        display: block;
        height: 100vh;
      }
    }

    .car-container {
      width: 66.666667%;
      padding: 8px;
      position: absolute;
      bottom: 10px;
      left: 0;
      @media ${mediaQuery.md} {
        width: auto;
      }
    }
  }
`;

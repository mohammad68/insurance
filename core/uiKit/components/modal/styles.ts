import styled from "styled-components";
import { mediaQuery } from "../../contants/mediaQuery";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  .modal {
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    padding-top: 50px;
    @media ${mediaQuery.md} {
      //border-radius: 8px;
      padding-top: 0;
      width: auto;
      height: auto;
      border-radius: 3px;
    }
  }
`;

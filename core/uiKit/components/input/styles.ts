import styled from "styled-components";
import { COLORS } from "../../contants/colors";

const StyledInputContainer = styled.div`
  .error {
    color: ${COLORS.red["500"]};
    font-size: 12px;
  }
`;

const StyledInput = styled.input<{ error?: string }>`
  width: 100%;
  border: ${(props) =>
    `1px solid  ${!props?.error ? COLORS.gray["300"] : COLORS.red["500"]}`};
  border-radius: 3px;
  padding: 7px;
  font-size: 13px;
  &:focus {
    border: ${(props) =>
      `1px solid  ${!props?.error ? COLORS.gray["500"] : COLORS.red["500"]}`};
    outline: none;
  }
`;

export { StyledInput, StyledInputContainer };

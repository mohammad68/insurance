import styled from "styled-components";
import { COLORS } from "../../contants/colors";

export const StyledSelect = styled.select`
  padding: 8px 12px;
  font-size: 16px;
  border: ${`1px solid ${COLORS.gray["300"]}`};
  border-radius: 4px;
  outline: none;
  background-color: ${COLORS.white};
  color: ${COLORS.gray["600"]};
  cursor: pointer;
  font-size: 15px;
  transition: border-color 0.3s;
  &:hover,
  :focus {
    border-color: ${COLORS.gray["500"]};
  }
  .place-holder {
    color: ${COLORS.gray["400"]};
  }
`;

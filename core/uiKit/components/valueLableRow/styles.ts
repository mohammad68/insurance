import styled from "styled-components";
import { COLORS } from "../../contants/colors";

export const StyledValueLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: ${`1px solid ${COLORS.gray["200"]}`};
  font-size: 14px;
  gap: 50px;
  .label {
    color: ${COLORS.gray["600"]};
  }

  .value {
    font-weight: 500;
  }
`;

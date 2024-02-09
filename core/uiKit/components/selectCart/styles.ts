import styled from "styled-components";
import { COLORS } from "../../contants/colors";

export const StyledSelectCart = styled.div<{ isEnabled: boolean }>`
  width: 100px;
  height: 100px;
  border: ${`1px solid ${COLORS.gray["400"]}`};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isEnabled ? 1 : 0.3)};
  background: ${(props) => !props.isEnabled && COLORS.gray[200]};
  cursor: pointer;
  .label {
    font-size: 14px;
    font-weight: 500;
  }
`;

import styled from "styled-components";
import { TButtonVariant } from "./types";
import { ButtonTheme } from "./Theme";

export const StyledButton = styled.button<{
  variant: TButtonVariant;
  width?: number;
}>`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;
  align-items: center;
  min-width: 100px;
  border-radius: 20px;
  height: 35px;
  font-size: 13px;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
  }

  width: ${(props) => `${props?.width}px` || "auto"};
  background: ${(props) => ButtonTheme[props.variant].background};
  border: ${(props) => ButtonTheme[props.variant].border};
  color: ${(props) => ButtonTheme[props.variant].color};
`;

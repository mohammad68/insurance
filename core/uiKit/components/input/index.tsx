import { forwardRef } from "react";
import { StyledInput, StyledInputContainer } from "./styles";
import { TInputProps } from "./types";
import { error } from "console";

const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ onChange, error, ...rest }, ref) => {
    return (
      <StyledInputContainer>
        <StyledInput
          type="text"
          onChange={onChange}
          error={error}
          ref={ref}
          {...rest}
        />
        {error && <p className="error">{error}</p>}
      </StyledInputContainer>
    );
  }
);

export default Input;

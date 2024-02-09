import { StyledButton } from "./styles";
import { TButtonProps } from "./types";
import Image from "next/image";

const Button = ({
  variant,
  label,
  width,
  startIcon,
  endIcon,
  ...rest
}: TButtonProps) => {
  return (
    <StyledButton variant={variant || "fill"} width={width} {...rest}>
      {startIcon && <Image src={startIcon} alt="" width={9} height={9} />}
      {label}
      {endIcon && <Image src={endIcon} alt="" width={9} height={9} />}
    </StyledButton>
  );
};

export default Button;

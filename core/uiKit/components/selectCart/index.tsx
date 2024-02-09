import Image from "next/image";
import { StyledSelectCart } from "./styles";
import { TSelectCartProps } from "./types";

const SelectCart = ({ src, label, isEnable, onClick }: TSelectCartProps) => {
  return (
    <StyledSelectCart isEnabled={isEnable} onClick={() => onClick()}>
      <Image width={35} height={35} src={src} alt={label} />
      <p className="label">{label}</p>
    </StyledSelectCart>
  );
};

export default SelectCart;

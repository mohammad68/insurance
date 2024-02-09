import { StyledValueLabelRow } from "./styles";
import { TValueLabelRowProps } from "./types";

const ValueLabelRow = ({ label, value }: TValueLabelRowProps) => {
  return (
    <StyledValueLabelRow>
      <span className="label">{label}</span>
      <span className="value">{value && value}</span>
    </StyledValueLabelRow>
  );
};
export default ValueLabelRow;

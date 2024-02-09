import { Strings } from "@/core/contants/strings";
import { StyledSelect } from "./styles";
import { TSelectProps } from "./types";

const Select: React.FC<TSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = Strings.select_a_option,
}) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      <option value="" disabled hidden>
        {placeholder}
      </option>

      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </StyledSelect>
  );
};

export default Select;

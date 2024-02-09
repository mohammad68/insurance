import { ChangeEvent } from "react";

export type TSelectOption = {
  value: string;
  label: string;
};

export type TSelectProps = {
  options?: TSelectOption[];
  value?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

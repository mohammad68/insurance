import { InputHTMLAttributes } from "react";

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";

export type TButtonVariant = "fill" | "outline";
type TButtonThemeItem = {
  background: string;
  color: string;
  border: string;
};
export type TButtonTheme = {
  fill: TButtonThemeItem;
  outline: TButtonThemeItem;
};

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TButtonVariant;
  label: string;
  width?: number;
  startIcon?: string | StaticImport;
  endIcon?: string | StaticImport;
};

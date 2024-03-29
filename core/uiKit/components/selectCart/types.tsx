import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TSelectCartProps = {
  src: string | StaticImport;
  label: string;
  isEnable: boolean;
  onClick: () => void;
};

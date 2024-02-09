import { COLORS } from "../../contants/colors";
import { TButtonTheme } from "./types";

export const ButtonTheme: TButtonTheme = {
  fill: {
    background: COLORS.primary,
    color: COLORS.white,
    border: `1px solid ${COLORS.primary}`,
  },
  outline: {
    background: COLORS.white,
    color: COLORS.primary,
    border: `1px solid ${COLORS.primary} `,
  },
};

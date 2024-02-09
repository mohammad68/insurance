import * as yup from "yup";
import {
  mobileRegex,
  passwordRegex,
  persianAlphabetRegex,
} from "@/core/contants/regext";
import { ValidationStrings } from "./strings";

export const generateRegisterFormSchema = () =>
  yup.object().shape({
    first_name: yup
      .string()
      .required(ValidationStrings.isRequired)
      .matches(persianAlphabetRegex, ValidationStrings.usePersianAlphabet),
    last_name: yup
      .string()
      .required(ValidationStrings.isRequired)
      .matches(persianAlphabetRegex, ValidationStrings.usePersianAlphabet),
    phone_number: yup
      .string()
      .required(ValidationStrings.isRequired)
      .matches(mobileRegex, ValidationStrings.phoneIsNotValid),
    password: yup
      .string()
      .required(ValidationStrings.isRequired)
      .min(4, ValidationStrings.min(4))
      .max(10, ValidationStrings.max(10))
      .matches(passwordRegex, ValidationStrings.passwordValidation),
  });

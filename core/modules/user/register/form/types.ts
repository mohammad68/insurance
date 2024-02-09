import { SubmitHandler } from "react-hook-form";

export type TRegisterForm = {
  first_name: string;
  last_name: string;
  phone_number: string;
  password: string;
};

export type TRegisterFormProps = {
  onSubmit: SubmitHandler<TRegisterForm>;
};

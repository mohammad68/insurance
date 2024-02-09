import { Strings } from "@/core/contants/strings";
import Input from "@/core/uiKit/components/input";
import Button from "@/core/uiKit/components/button";
import { TRegisterForm, TRegisterFormProps } from "./types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateRegisterFormSchema } from "@/core/contants/validationSchema";
import { StyledRegisterForm } from "./styles";
import { motion } from "framer-motion";

const RegisterForm = ({ onSubmit }: TRegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: yupResolver(generateRegisterFormSchema()),
    defaultValues: {
      first_name: "علی",
      last_name: "احمدی",
      password: "1Aaaaaaaa",
      phone_number: "09366963617",
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
        <p className="title">{Strings.register}</p>

        <div className="name">
          <Input
            {...register("first_name")}
            error={errors.first_name?.message}
            placeholder={Strings.first_name}
          />
          <Input
            {...register("last_name")}
            error={errors.last_name?.message}
            placeholder={Strings.last_name}
          />
        </div>
        <Input
          {...register("phone_number")}
          error={errors.phone_number?.message}
          type="number"
          placeholder={Strings.phoneNumber}
        />
        <Input
          {...register("password")}
          type="password"
          error={errors.password?.message}
          placeholder={Strings.password}
        />
        <Button label={Strings.register} type="submit" className="btn" />
      </StyledRegisterForm>
    </motion.div>
  );
};

export default RegisterForm;

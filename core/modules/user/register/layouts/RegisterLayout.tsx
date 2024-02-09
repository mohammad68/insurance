"use client";
import RegisterForm from "../form/RegisterForm";
import { TRegisterForm } from "../form/types";
import { SubmitHandler } from "react-hook-form";
import { useUserStore } from "../../store/UserStore";
import { TUser } from "../../types";
import { useRouter } from "next/navigation";
import { AppQueryParams, AppRoute } from "@/core/contants/routes";

const RegisterLayout = () => {
  const router = useRouter();

  const setUser = useUserStore((state) => state.setUser);

  const handleOnSubmit: SubmitHandler<TRegisterForm> = (
    data: TRegisterForm
  ) => {
    setUser(mapTRegisterFormToUser(data));

    router.replace(
      `${AppRoute.CAR_INSURANCE}?${AppQueryParams.INSURANCE_TYPE}=${AppQueryParams.THRID_PARTY}`,
      {}
    );
  };

  const mapTRegisterFormToUser = (data: TRegisterForm): TUser => {
    return {
      firstName: data.first_name,
      lastName: data.last_name,
      phone: data.phone_number,
    };
  };

  return <RegisterForm onSubmit={handleOnSubmit} />;
};

export default RegisterLayout;

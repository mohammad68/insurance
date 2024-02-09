import { useQuery } from "@tanstack/react-query";
import httpClient from "../client";
import { ServerStateKeysEnum } from "../serverStateKeyEnum";
import {
  IInsuranceCompony,
  IThridDicounts,
  IVehicelType,
} from "../types/carInsurance";

export const getInsuranceCompony = async () => {
  return await httpClient.get<IInsuranceCompony[]>("/third/companies");
};

export const getVehicleTypes = async () => {
  return await httpClient.get<IVehicelType[]>("/vehicle/types");
};

export const getThridDiscount = async () => {
  return await httpClient.get<IThridDicounts[]>("/third/third-discounts");
};

export const useGetInsuranceCompony = () => {
  return useQuery({
    queryKey: [ServerStateKeysEnum.InsuranceCompony],
    queryFn: getInsuranceCompony,
  });
};

export const useGetVehicleTypes = () => {
  return useQuery({
    queryKey: [ServerStateKeysEnum.VehicelType],
    queryFn: getVehicleTypes,
  });
};

export const useGetThridDiscount = () => {
  return useQuery({
    queryKey: [ServerStateKeysEnum.thirdDiscounts],
    queryFn: getThridDiscount,
  });
};

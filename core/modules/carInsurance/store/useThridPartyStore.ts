import { TSelectOption } from "@/core/uiKit/components/select/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type TUserStore = {
  carModel: TSelectOption | null;
  carType: TSelectOption | null;
  insuranceCompony: TSelectOption | null;
  discountThridParty: TSelectOption | null;
  discountAccident: TSelectOption | null;
  setCarModal: (carModel: TSelectOption) => void;
  setCarType: (carType: TSelectOption) => void;
  setInsuranceCompony: (insuranceCompony: TSelectOption) => void;
  setDiscountThridParty: (discountThridParty: TSelectOption) => void;
  setDiscountAccident: (discountAccident: TSelectOption) => void;
};

const initialState: TUserStore = {
  carModel: null,
  carType: null,
  insuranceCompony: null,
  discountThridParty: null,
  discountAccident: null,
  setCarModal: () => {},
  setCarType: () => {},
  setInsuranceCompony: () => {},
  setDiscountThridParty: () => {},
  setDiscountAccident: () => {},
};

export const useThridPartyStore = create<TUserStore>()(
  immer((set) => ({
    ...initialState,
    setCarModal: (value: TSelectOption) =>
      set((state) => {
        state.carModel = value;
      }),
    setCarType: (value: TSelectOption) =>
      set((state) => {
        state.carType = value;
      }),
    setInsuranceCompony: (value: TSelectOption) =>
      set((state) => {
        state.insuranceCompony = value;
      }),
    setDiscountThridParty: (value: TSelectOption) =>
      set((state) => {
        state.discountThridParty = value;
      }),
    setDiscountAccident: (value: TSelectOption) =>
      set((state) => {
        state.discountAccident = value;
      }),
  }))
);

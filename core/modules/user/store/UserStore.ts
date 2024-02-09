import { create } from "zustand";
import { TUser } from "../types";

export type TUserStore = {
  user: TUser | null;
  setUser: (user: TUser) => void;
  clearUser: () => void;
};

const initialState: TUserStore = {
  user: null,
  setUser: () => {},
  clearUser: () => {},
};

export const useUserStore = create<TUserStore>()((set) => ({
  ...initialState,
  setUser: (user: TUser) => set({ user }),
  clearUser: () => set({ user: null }),
}));

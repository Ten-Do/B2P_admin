import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuth: true,
  user: {name: "Arthur"},
  setAuth: (flag) => set((state) => ({ isAuth: flag })),
}));

export default useAuthStore;

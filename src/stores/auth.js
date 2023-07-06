import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuth: true,
  user: {name: "Arthur"},
  setAuth: (flag) => set(() => ({ isAuth: flag })),
}));

export default useAuthStore;

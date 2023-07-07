import { create } from "zustand";
import $api from "../api/api";
import { API_ENDPOINTS } from "../api/apiEndpoints";

const useAuthStore = create((set) => ({
  isAuth: true,
  user: { name: "Arthur", email: "" },
  isLoading: false,
  setAuth: (flag) => set(() => ({ isAuth: flag })),
  changeUserName: (username) => {
    set({ user: { name: username } });
    //! put запрос на сервер
  },
  login: async (email, password) => {
    try {
      const response = await $api.post(API_ENDPOINTS.LOGIN, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.accessToken);
      set({ isAuth: true, user: response.data.user });
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
  logout: async () => {
    try {
      await $api.post(API_ENDPOINTS.LOGOUT);
      localStorage.removeItem("token");
      set({ isAuth: false, user: {} });
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
  checkAuth: async () => {
    try {
      set({ isLoading: true });
      const response = await $api.get(API_ENDPOINTS.REFRESH_TOKEN);
      localStorage.setItem("token", response.data.accessToken);
      set({ isAuth: true, user: response.data.user });
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;

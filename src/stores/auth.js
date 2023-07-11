import axios from "axios";
import { create } from "zustand";
import { API_URL } from "../api/api";
import { API_ENDPOINTS } from "../api/apiEndpoints";
import AuthService from "../services/AuthService";

const useAuthStore = create((set) => ({
  isAuth: true,
  user: { name: "Arthur", email: "Arthur1203@yandex.ru" },
  isLoading: false,
  setAuth: (flag) => set(() => ({ isAuth: flag })),
  setEmail: async (email) => {
    try {
      // const response = await AuthService.setEmail(email);
      set((state) => ({ user: { ...state.user, email: email } })); // response.data, вместо email: email
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  },
  setPassword: async (password) => {
    try {
      // const response = await AuthService.setPassword(password);
      set((state) => ({ user: { ...state.user, password: password } })); // response.data, вместо email: email
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  },
  login: async (email, password) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      set({ isAuth: true, user: response.data.user });
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  },
  logout: async () => {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      set({ isAuth: false, user: {} });
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  },
  checkAuth: async () => {
    try {
      set({ isLoading: true });
      const response = await axios.get(
        `${API_URL}/${API_ENDPOINTS.REFRESH_TOKEN}`,
        { withCredentials: true }
      );
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

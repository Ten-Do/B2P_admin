import { create } from "zustand";
import $api from "../api/api";
import { API_ENDPOINTS } from "../api/apiEndpoints";
import { devtools } from "zustand/middleware";

const useSettingsStore = create(
  devtools((set) => ({
    settings: {
      email: false,
      alternative_payment: false,
      commisions: [],
    },
    isLoading: false,
    error: "",
    fetchSettings: async () => {
      set({ isLoading: true });
      const response = await $api.get("/settings.json");

      set({ settings: response[0] });
      try {
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);

export default useSettingsStore;

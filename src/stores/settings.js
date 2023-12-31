import { create } from "zustand";
import { devtools } from "zustand/middleware";
import SettingsService from "../services/SettingsService";

const useSettingsStore = create(
  devtools((set) => ({
    settings: {
      email: false,
      alternative_payment: true,
      store_logo: "",
    },
    isLoading: false,
    error: "",
    fetchSettings: async () => {
      try {
        set({ isLoading: true });
        const response = await SettingsService.fetchSettings();
        set({ settings: response});
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
    setSettings: async (settings) => {
      try {
        set({ isLoading: true });
        set({ settings: settings });
        // const response = await SettingsService.setSettings(settings);
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);

export default useSettingsStore;

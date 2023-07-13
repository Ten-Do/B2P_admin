import { create } from "zustand";
import { devtools } from "zustand/middleware";
import SettingService from "../services/SettingService";

const useSettingsStore = create(
  devtools((set) => ({
    settings: {
      email: false,
      alternative_payment: true,
      commissions: [],
    },
    isLoading: false,
    error: "",
    setSettings: async (settings) => {
        console.log(settings);
        
      try {
        set({ isLoading: true });
        set({ settings: settings  });
        // const response = await SettingService.setSettings(settings);
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
    fetchSettings: async () => {
      try {
        set({ isLoading: true });
        const response = await SettingService.fetchSettings();
        set({ settings: response[0] });
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);

export default useSettingsStore;

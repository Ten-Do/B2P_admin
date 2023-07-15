import { create } from "zustand";
import { devtools } from "zustand/middleware";
import CommissionsService from "../services/CommissionsService";


const useCommissionsStore = create(
  devtools((set) => ({
    commissions: [],
    isLoading: false,
    error: "",
    fetchCommissions: async () => {
      try {
        set({ isLoading: true });
        const response = await CommissionsService.fetchCommissions();
        set({ commissions: response});
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
    setCommissions: async (commissions) => {
      console.log(commissions);
      try {
        set({ isLoading: true });
        set({ commissions: commissions });
        // const response = await CommissionService.setCommissions(settings);
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);

export default useCommissionsStore;

import { create } from "zustand";
import $api from "../api/api";
import { API_ENDPOINTS } from "../api/apiEndpoints";
import { devtools } from "zustand/middleware";

const useOrdersStore = create(
  devtools((set) => ({
    orders: [],
    isLoading: false,
    error: "",
    fetchOrders: async () => {
      try {
        set({ isLoading: true });
        const response = await $api.get(API_ENDPOINTS.ORDERS);
        set({ orders: response });
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);

export default useOrdersStore;

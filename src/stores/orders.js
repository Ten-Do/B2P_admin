import { create } from "zustand";
import { devtools } from "zustand/middleware";
import OrderService from "../services/OrderService";

const useOrdersStore = create(
  devtools((set) => ({
    orders: [],
    isLoading: false,
    error: "",
    fetchOrders: async () => {
      try {
        set({ isLoading: true });
        const response = await OrderService.fetchOrders();
        set({ orders: response.data });
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);

export default useOrdersStore;

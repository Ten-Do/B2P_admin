import { create } from "zustand";
import { devtools } from "zustand/middleware";
import OrdersService from "../services/OrdersService";

const useOrdersStore = create(
  devtools((set) => ({
    orders: [],
    isLoading: false,
    error: "",
    fetchOrders: async () => {
      try {
        set({ isLoading: true });
        const response = await OrdersService.fetchOrders();
        set({ orders: response});
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);

export default useOrdersStore;

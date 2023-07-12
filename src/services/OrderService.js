import $api from "../api/api";
import { API_ENDPOINTS } from "../api/apiEndpoints";

export default class OrderService {
  static async fetchOrders() {
    return $api.get(API_ENDPOINTS.ORDERS).then((response) => response.data);
  }
}

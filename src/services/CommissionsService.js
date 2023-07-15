import $api from "../api/api";
import { API_ENDPOINTS } from "../api/apiEndpoints";

export default class CommissionService {
  static async fetchCommissions() {
    return $api.get(API_ENDPOINTS.COMMISSIONS).then((response) => response.data);
  }

  static async setCommissions(commission) {
    return $api
      .put(API_ENDPOINTS.COMMISSIONS, commission)
      .then((response) => response.data);
  }

  static async addCommission(settings) {
    return $api
      .post(API_ENDPOINTS.COMMISSIONS, settings)
      .then((response) => response.data);
  }
}

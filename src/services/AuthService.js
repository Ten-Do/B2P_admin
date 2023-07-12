import $api from "../api/api";
import { API_ENDPOINTS } from "../api/apiEndpoints";

export default class AuthService {
  static async setEmail(email) {
    return $api.put(API_ENDPOINTS.EMAIL, { email });
  }

  static async setPassword(password) {
    return $api.put(API_ENDPOINTS.PASSWORD, { password });
  }

  static async login(email, password) {
    return $api.post(API_ENDPOINTS.LOGIN, { email, password });
  }

  static async logout() {
    return $api.post(API_ENDPOINTS.LOGOUT);
  }
}

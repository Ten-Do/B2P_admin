import $api from "../api/api";
import { API_ENDPOINTS } from "../api/apiEndpoints";

export default class AuthService {
  static async setEmail(email) {
    return $api
      .put(API_ENDPOINTS.EMAIL, { email })
      .then((response) => response.data);
  }

  static async setPassword(password) {
    return $api
      .put(API_ENDPOINTS.PASSWORD, { password })
      .then((response) => response.data);
  }

  static async login(email, password) {
    return $api
      .post(API_ENDPOINTS.LOGIN, { email, password })
      .then((response) => response.data);
  }

  static async logout() {
    return $api.post(API_ENDPOINTS.LOGOUT).then((response) => response.data);
  }
}

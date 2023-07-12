import $api from "../api/api";
import { API_ENDPOINTS } from "../api/apiEndpoints";

export default class SettingService {
  static async fetchSettings() {
    return $api.get(API_ENDPOINTS.SETTINGS);
  }

  static async setSettings(settings) {
    return $api.put(API_ENDPOINTS.SETTINGS, settings);
  }
}

import axios from "axios";

const API_URL = "https://path/to/server/api";

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;

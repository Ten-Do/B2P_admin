import axios from "axios";

export const API_URL = process.env.PUBLIC_URL;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $api;

// const $api = {
//   get: async (url) => {
//     const response = await fetch(API_URL + url);
//     if (!response.ok) throw Error(response.statusText);
//     return await response.json();
//   },
//   post: async (url, data) => {
//     const response = await fetch(API_URL + url, {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//       });
//       return await response.json();
//   },
//   put: async (url, data) => {
//     const response = await fetch(API_URL + url, {
//           method: "PUT",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//       });
//       return await response.json();
//   },
//   // Add other HTTP methods (PUT, DELETE, etc.) as needed
// };

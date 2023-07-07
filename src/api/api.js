// const API_URL = "https://path/to/server/api";
const API_URL = process.env.PUBLIC_URL;

const $api = {
  get: async (url) => {
    const response = await fetch(API_URL + url);
    return await response.json();
  },
  post: async (url, data) => {
    const response = await fetch(API_URL + url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });
      return await response.json();
  },
  put: async (url, data) => {
    const response = await fetch(API_URL + url, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });
      return await response.json();
  },
  // Add other HTTP methods (PUT, DELETE, etc.) as needed
};

export default $api;

const API_URL = "https://path/to/server/api";

const $api = {
  get: (url) => {
    return fetch(API_URL + url).then((response) => response.json());
  },
  post: (url, data) => {
    return fetch(API_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  },
  // Add other HTTP methods (PUT, DELETE, etc.) as needed
};

export default $api;

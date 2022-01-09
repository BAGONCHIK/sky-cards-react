const axios = require("axios");

const instance = axios.default.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 3000,
});

export const createCard = (payload) => {
  instance.post("card", payload);
};

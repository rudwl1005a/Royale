import baseAxios from "axios";

const axios = baseAxios.create({
  // baseURL: "https://royale.kr/api/",
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;

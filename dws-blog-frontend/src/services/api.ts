import axios from "axios";

export const api = axios.create({
  baseURL: "https://tech-test-backend.dwsbrazil.io",
});

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_HMA_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
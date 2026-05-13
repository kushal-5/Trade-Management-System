
import axios from "axios";
import { getUserToken } from "../utils/cookieUtils";

// Create an Axios instance
const rawBase = (import.meta.env.VITE_BASE_URL ?? "").replace(/\/$/, "");
// Set VITE_BASE_URL empty in .env and use Vite proxy → same-origin /api/v1 (no CORS to :3000).
const apiRoot =
  rawBase.length > 0 ? `${rawBase}/api/v1` : "/api/v1";

const axiosInstance = axios.create({
  baseURL: apiRoot,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getUserToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
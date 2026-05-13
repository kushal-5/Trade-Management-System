import axios from "axios";
import { getBrokerToken } from "../utils/cookieUtils";



const rawBase = (import.meta.env.VITE_BASE_URL ?? "").replace(/\/$/, "");
const brokerRoot =
  rawBase.length > 0 ? `${rawBase}/broker/v1` : "/broker/v1";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: brokerRoot,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = getBrokerToken(); 
   
    // retrieve token here
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

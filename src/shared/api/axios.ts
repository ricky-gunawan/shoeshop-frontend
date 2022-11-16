import baseURL from "@/shared/config/baseURL";
import axios from "axios";

export const axiosPrivate = axios.create({
  baseURL,
  headers: { "Content-Type": "aplication/json" },
  withCredentials: true,
});

const axiosPublic = axios.create({
  baseURL,
});

export default axiosPublic;

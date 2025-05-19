import axios from "axios";
import { getEnsakeDeviceHeader } from "./generateEnsakeHeader";
import { cookies } from "next/headers";

const api = axios.create({
  baseURL: "https://core-main-lgmkhu.laravel.cloud/assessment",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Ensake-Device": getEnsakeDeviceHeader(),
  },
});

api.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("ensake.token")?.value;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle authentication errors (401)
    if (error.response && error.response.status === 401) {
      console.log("error from api client", error.response.data.message);
      // toast("Session expired. Please login again.", {
      //   description: error?.response?.data?.message,
      // });
    }
    return Promise.reject(error);
  },
);

export default api;

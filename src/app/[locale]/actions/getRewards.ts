"use server";

import api from "@/lib/apiClient";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

export const getRewards = async () => {
  try {
    const res = await api.get("/rewards");

    // console.log(res.data);

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        redirect("/");
      }
      return {
        message: error.response?.data.message,
      };
    } else {
      return {
        message: "something went wrong",
      };
    }
  }
};

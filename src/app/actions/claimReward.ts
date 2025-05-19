"use server";

import api from "@/lib/apiClient";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const claimReward = async (reward_id: number) => {
  try {
    const res = await api.post("/rewards", { reward_id });

    revalidatePath("/dashboard");
    return {
      message: res.data.message,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        redirect("/");
      } else {
        return {
          message: error.response?.data.message,
        };
      }
    } else {
      return {
        message: "something went wrong",
      };
    }
  }
};

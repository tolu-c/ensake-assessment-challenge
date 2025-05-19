"use server";

import api from "@/lib/apiClient";
import { FormState, loginSchema } from "@/lib/def";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export const loginAction = async (
  previousState: FormState,
  formdata: FormData,
) => {
  const formValues = {
    email: formdata.get("email") as string,
    password: formdata.get("password") as string,
  };
  const { data, success, error } = loginSchema.safeParse(formValues);
  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
    };
  }
  try {
    const res = await api.post("/login", data);

    const cookieStore = await cookies();
    cookieStore.set("ensake.token", res.data.customer.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 5 * 60, // 5 minutes TTL as requested
      path: "/",
    });

    return {
      success: {
        message: res.data.message,
        token: res.data.customer.token,
      },
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        errors: { root: error.response?.data.message },
      };
    }
    console.log(error);
    return {
      errors: { root: "An unexpected error occurred" },
    };
  }
};

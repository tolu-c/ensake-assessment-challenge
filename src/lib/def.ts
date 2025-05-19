import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is invalid" })
    .trim(),
  password: z.string().nonempty({ message: "Password is required" }).trim(),
});

export type FormState =
  | {
    errors?: {
      email?: string[];
      password?: string[];
      root?: string;
    };
    success?: {
      message?: string;
      token?: string;
    };
  }
  | undefined;

"use client";

import { TextInput } from "@/_components/form";
import { CheckboxInput } from "@/_components/form/checkbox-input";
import { Button } from "@/_components/ui/button";
import { LockIcon, MailIcon } from "@/assets/icons";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginAction } from "@/app/[locale]/actions/auth";
import { useTranslations } from "next-intl";

export const Login = () => {
  const [state, action, pending] = useActionState(loginAction, undefined);
  const router = useRouter();
  const t = useTranslations("Login");

  useEffect(() => {
    if (state?.success?.message) {
      toast(state?.success?.message);
      router.push("/rewards");
    }
  }, [state?.success?.message, router]);

  const getEmailError = () => {
    if (state?.errors && "email" in state.errors) {
      return state.errors.email?.[0];
    }
    return undefined;
  };

  // Helper function to safely access password error
  const getPasswordError = () => {
    if (state?.errors && "password" in state.errors) {
      return state.errors.password?.[0];
    }
    return undefined;
  };

  return (
    <div className="w-full flex flex-col items-center gap-20">
      <form
        action={action}
        className="w-110 h-auto border-0 lg:border p-8 flex flex-col items-center gap-6 border-stroke-soft-200 rounded-20"
      >
        <div className="w-full flex flex-col items-start lg:items-center gap-2">
          <div className="w-full flex flex-col items-start lg:items-center text-left gap-1 lg:text-center">
            <h3 className="text-strong-950 text-2xl font-medium">
              {t("title")}
            </h3>
            <p className="text-base text-sub-600">{t("about")}</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-3">
          <TextInput
            name="email"
            label="Email Address"
            placeholder="hello@ensake.com"
            icon={<MailIcon className="size-5 text-current" />}
            error={getEmailError()}
          />
          <TextInput
            label="Password"
            type="password"
            icon={<LockIcon className="size-5 text-current" />}
            placeholder="• • • • • • • • • •"
            name="password"
            error={getPasswordError()}
          />
        </div>
        <div className="w-full flex items-start justify-between">
          <CheckboxInput name="keepLoggedIn" label="Keep me logged in" />
          <Link
            href={"/forgot-password"}
            className="text-sm/5 font-medium underline text-sub-600"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" disabled={pending}>
          Log in
        </Button>

        {state?.errors && "root" in state.errors && (
          <p className="text-error-base text-sm/5 font-medium -mt-2">
            {state?.errors?.root}
          </p>
        )}
      </form>
      <div className="flex items-center gap-1">
        <p className="text-sub-600 text-sm/5">Don&apos;t have an account?</p>
        <Link
          href={"/register"}
          className="text-primary-base underline text-sm/5 font-medium"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

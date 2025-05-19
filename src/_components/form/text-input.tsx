"use client";

import { EyeLineIcon } from "@/assets/icons";
import { ComponentProps, ReactNode, useState } from "react";
import { Label } from "./label";

interface TextInputProps extends ComponentProps<"input"> {
  label: string;
  icon: ReactNode;
  error?: string;
}
export const TextInput = ({
  label,
  icon,
  name,
  type,
  error,
  ...props
}: TextInputProps) => {
  const [inputType, setInputType] = useState(type || "text");
  const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  return (
    <div className="w-full flex flex-col items-start gap-1">
      <Label htmlFor={name}>{label}</Label>
      <div className="w-full relative flex">
        <span className="absolute top-1/2 -translate-y-1/2 left-3 text-icon-soft-400">
          {icon}
        </span>
        <input
          type={inputType}
          id={name}
          name={name}
          className="w-full h-10 bg-white rounded-10 flex items-center p-2.5 pl-10 border border-stroke-soft-200 shadow-x-sm focus:outline-none focus:ring-0 text-sm/5 placeholder:text-icon-soft-400 text-sub-600 focus:border-sub-600"
          {...props}
        />
        {isPassword ? (
          <span
            className="absolute top-1/2 -translate-y-1/2 right-2.5"
            onClick={togglePasswordVisibility}
          >
            <EyeLineIcon className="text-icon-soft-400 size-5" />
          </span>
        ) : null}
      </div>
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </div>
  );
};

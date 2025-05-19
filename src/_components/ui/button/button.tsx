import clsx from "clsx";
import { ComponentProps } from "react";

export const Button = ({
  className,
  children,
  ...props
}: ComponentProps<"button">) => {
  return (
    <button
      className={clsx(
        "btn w-full h-auto p-2.5 flex items-center justify-center gap-1 rounded-10 text-white text-sm/5 font-medium disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

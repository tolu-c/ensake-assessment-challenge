import { ComponentProps } from "react";

export const Label = ({ children, ...props }: ComponentProps<"label">) => {
  return (
    <label className="text-sm/5 text-strong-950" {...props}>
      {children}
    </label>
  );
};

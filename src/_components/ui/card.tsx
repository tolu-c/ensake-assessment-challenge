import { ComponentProps } from "react";
import clsx from "clsx";

export const Card = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={clsx(
        "w-full p-6 flex flex-col items-start gap-4 shadow-x-sm border border-[#E5E7EB] rounded-xl bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

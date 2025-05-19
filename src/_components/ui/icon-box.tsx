import clsx from "clsx";
import { ComponentProps } from "react";

export const IconBox = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center p-2.5 rounded-10 bg-white relative",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

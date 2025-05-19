import { forwardRef } from "react";
import { Label } from "./label";

interface CheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  // error?: string;
}

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ name, label, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={name}
          ref={ref}
          className="size-4 border-2 border-stroke-soft-200 shadow-checkbox bg-white accent-stroke-soft-200 rounded-sm"
          {...props}
        />
        <Label htmlFor={name}>{label}</Label>
      </div>
    );
  },
);

CheckboxInput.displayName = "CheckboxInput";

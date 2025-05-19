import { DropdownIcon, ExpandIcon, VerifiedIcon } from "@/assets/icons";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="w-68 h-full flex-none flex-col hidden lg:flex border-r border-stroke-soft-200">
      <div className="p-6 w-full flex items-center gap-3 border-b border-stroke-soft-200">
        <Image
          src={"/ensake-logo.svg"}
          alt="ensake-logo"
          width={40}
          height={40}
          className="size-10 object-center object-cover"
          loading="lazy"
        />
        <div className="flex-1 flex flex-col items-start gap-1">
          <p className="text-sm/5 text-strong-950 font-medium">Ensake</p>
          <p className="text-sub-600 text-xs">Loyalties</p>
        </div>
        <div className="p-0.5 rounded-md bg-white border border-stroke-soft-200 shadow-x-sm flex items-center justify-center">
          <ExpandIcon className="size-5 text-sub-600" />
        </div>
      </div>
      <div className="flex-1">nav links</div>
      <div className="p-6 w-full flex items-center gap-3 border-t border-stroke-soft-200">
        <Image
          src={"/avatar.png"}
          alt="avatar"
          width={40}
          height={40}
          className="size-10 object-center object-cover rounded-full"
          loading="lazy"
        />
        <div className="flex-1 flex flex-col items-start gap-1">
          <div className="flex items-start gap-0.5">
            <p className="text-sm/5 text-strong-950 font-medium">
              Arthur Taylor
            </p>
            <VerifiedIcon />
          </div>
          <p className="text-sub-600 text-xs">arthur@alignui.com</p>
        </div>
        <div className="p-0.5 rounded-md bg-white shadow-x-sm flex items-center justify-center">
          <DropdownIcon className="size-5 text-sub-600 -rotate-90" />
        </div>
      </div>
    </div>
  );
};

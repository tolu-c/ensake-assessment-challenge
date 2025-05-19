import { DropdownIcon, GlobeIcon } from "@/assets/icons";
import { Metadata } from "next";
import Image from "next/image";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Login | EnSake",
};
const AuthLayout = ({ children }: PropsWithChildren) => {
  const currentYear = new Date().getFullYear();
  return (
    <main className="w-full flex items-center justify-center h-screen relative bg-white">
      <div className="absolute top-6 px-11 inset-x-0 flex items-center justify-between">
        <Image
          src={"/ensake-logo.svg"}
          alt="ensake-logo"
          width={40}
          height={40}
          className="size-10 object-center object-cover"
          loading="lazy"
        />
        <div className="flex items-center gap-1">
          <GlobeIcon className="size-5 text-icon-soft-400" />
          <div className="flex items-end gap-0.5">
            <p className="uppercase text-sm/5 text-sub-600">eng</p>
            <DropdownIcon className="text-sub-600 size-5" />
          </div>
        </div>
      </div>
      {children}
      <div className="absolute bottom-6 px-11 inset-x-0 flex items-center">
        <p className="text-sub-600 text-sm/5">
          © {currentYear} Ensake Loyalties
        </p>
      </div>
    </main>
  );
};

export default AuthLayout;

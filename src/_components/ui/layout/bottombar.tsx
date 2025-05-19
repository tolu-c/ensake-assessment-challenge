import { HomeIcon } from "@/assets/icons";
import Link from "next/link";
import React from "react";

export const Bottombar = () => {
  return (
    <div className="w-full h-14 flex lg:hidden border-t px-9 items-center justify-between fixed bottom-0 inset-x-0 z-50 bg-white">
      <Link
        href={"/rewards"}
        className="flex flex-col items-center w12 h-10 px-3 justify-between"
      >
        <HomeIcon className="text-primary-base size-6" />
        <span className="text-[10px]/4 text-primary-base">Home</span>
      </Link>
    </div>
  );
};

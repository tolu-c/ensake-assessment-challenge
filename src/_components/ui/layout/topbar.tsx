import Image from "next/image";
import React from "react";
import { IconBox } from "../icon-box";
import { NotificationIcon, SearchIcon } from "@/assets/icons";
import { cookies } from "next/headers";

export const Topbar = async () => {
  const cookieStore = await cookies();
  const user = cookieStore.get("ensake.user")?.value;
  const userInfo = user ? JSON.parse(user as string) : undefined;
  return (
    <div className="w-full h-24 px-8 py-5 bg-white flex items-center gap-3">
      <div className="flex-1 flex items-center gap-3.5">
        <Image
          src={"/user.png"}
          alt="user"
          className="size-14 object-center object-cover rounded-full flex-none"
          width={56}
          height={56}
          loading="lazy"
        />
        <div className="flex-1 flex flex-col items-start gap-1">
          <p className="text-lg/6 text-strong-950 font-medium">
            {userInfo?.first_name} {userInfo?.last_name}
          </p>
          <p className="text-sm/5 text-sub-600">Welcome Back To Ensake</p>
        </div>
      </div>
      <IconBox>
        <SearchIcon className="size-5 text-sub-600" />
      </IconBox>
      <IconBox>
        <NotificationIcon className="text-sub-600 size-5" />
        <span className="absolute z-50 size-1 rounded-full bg-error-base top-3 right-3.5" />
      </IconBox>
    </div>
  );
};

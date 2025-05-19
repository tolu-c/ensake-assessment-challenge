"use client";

import { GlobeIcon } from "@/assets/icons";
import { useRouter } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";

export const LocalSwitcherSelect = ({
  children,
  defaultValue,
}: {
  children: ReactNode;
  defaultValue: string;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      const currentPath = window.location.pathname;
      const currentSearch = window.location.search;
      const newPath = currentPath.replace(/^\/[^\/]+/, `/${nextLocale}`);
      const newUrl = `${newPath}${currentSearch}`;
      router.replace(newUrl);
    });
  };
  return (
    <div className="flex items-center gap-1">
      <GlobeIcon className="size-5 text-icon-soft-400" />
      <select
        disabled={isPending}
        defaultValue={defaultValue}
        onChange={onSelectChange}
        className="uppercase text-sm/5 text-sub-600"
      >
        {children}
      </select>
    </div>
  );
};

import { Bottombar, Sidebar, Topbar } from "@/_components/ui/layout";
import { PropsWithChildren } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="w-full flex items-start h-screen">
      <Sidebar />
      <div className="w-full flex-1 flex flex-col items-start pb-14">
        <Topbar />
        <div className="w-full max-w-[768px] h-full mx-auto bg-[#F9FAFB]">
          {children}
        </div>
        <Bottombar />
      </div>
    </main>
  );
};

export default AppLayout;

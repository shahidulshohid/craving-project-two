import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./page";

import DashNavbar from "./dashNavbar/page";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <NextAuthSessionProvider>
    <SidebarProvider className="">
      <AppSidebar />
      <SidebarTrigger />
      <div className="flex w-11/12 flex-col mx-5   gap-4">
        <nav>
          {" "}
          <DashNavbar />
        </nav>
        <main className="  ">{children}</main>
      </div>
    </SidebarProvider>
    </NextAuthSessionProvider>
  );
}

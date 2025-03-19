"use client";
import { SidebarLeft } from "@/components/sidebar/components/sidebar-left";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavActions } from "./components/nav-actions";
import { SidebarRight } from "./components/sidebar-right";
import { ReactNode } from "react";
import BreadcrumbComponent from "../modified-ui/breadcrumb-component";

export default function AppSidebar({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
            <BreadcrumbComponent />
          </div>
          <div className="ml-auto flex items-center px-3">
            <NavActions />
            <Separator orientation="vertical" className="h-4 mx-2" />
            <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
          </div>
        </header>

        {/* <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg- muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}

        <div className="p-4">{children}</div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}

"use client"
import { useState } from "react"
import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@learnings/ui/components/breadcrumb"
import { Separator } from "@learnings/ui/components/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@learnings/ui/components/sidebar"
import { Button } from "@learnings/ui/components/button"
import { AlarmClock, BugPlay, ChevronLeft, ChevronRight, CloudUpload, Flame, LayoutDashboard, Play, Settings, StickyNote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@learnings/ui/components/avatar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@learnings/ui/components/resizable"
import { useDroppable } from '@dnd-kit/core';



export default function Page() {

  const [open, setOpen] = useState<boolean>(false);


  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
    background: isOver ? 'yellow' : undefined,
  };


  return (
    <SidebarProvider defaultOpen={open} open={open} onOpenChange={setOpen}>
      <SidebarLeft />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-2">

            <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><SidebarTrigger /> Problem List</Button>
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><ChevronLeft /></Button>
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><ChevronRight /></Button>

            {/* 
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>

          <div className="flex items-center gap-2">
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer" ><BugPlay /></Button>
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><Play /> Run</Button>
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Submit</Button>
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><AlarmClock /></Button>
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><StickyNote /></Button>
          </div>

          <div className="flex items-center gap-2">
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><LayoutDashboard /></Button>
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><Settings /></Button>
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><Flame /></Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button size={"sm"} variant={"ghost"} className="cursor-pointer">Premium</Button>
          </div>

        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg border md:min-w-[450px]"
          >
            <ResizablePanel defaultSize={50}>
              <div className="sticky top-0 flex items-center justify-between bg-accent/50 p-1 gap-1">
                <div className="flex gap-1 overflow-auto">
                  <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Description</Button>
                  <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Editorial</Button>
                  <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Solutions</Button>
                  <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Submissions</Button>
                </div>
                <div className="flex gap-1">
                  <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> </Button>
                  <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /></Button>
                </div>

              </div>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={25}>
                  <div className="sticky top-0 flex items-center justify-between bg-accent/50 p-1 gap-1">
                    <div className="flex gap-1 overflow-auto">
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer" ref={setNodeRef} style={style} id="description"><CloudUpload /> Description</Button>
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Editorial</Button>
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Solutions</Button>
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Submissions</Button>
                    </div>
                    <div className="flex gap-1">
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> </Button>
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /></Button>
                    </div>

                  </div>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Two</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="sticky top-0 flex items-center justify-between bg-accent/50 p-1 gap-1">
                    <div className="flex gap-1 overflow-auto">
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Description</Button>
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Editorial</Button>
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Solutions</Button>
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> Submissions</Button>
                    </div>
                    <div className="flex gap-1">
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /> </Button>
                      <Button size={"sm"} variant={"ghost"} className="cursor-pointer"><CloudUpload /></Button>
                    </div>

                  </div>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold" draggable>Three</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </SidebarInset>
      {/* <SidebarRight /> */}
    </SidebarProvider>
  )
}

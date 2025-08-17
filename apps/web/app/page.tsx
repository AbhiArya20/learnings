"use client"

import { Button } from "@workspace/ui/components/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"
import { ChevronLeft, ChevronRight, ListTodo, Shuffle } from "lucide-react"
import { createContext, PropsWithChildren, useContext } from "react"
import { GripVerticalIcon } from "lucide-react"
import * as React from "react"
import * as ResizablePrimitive from "react-resizable-panels"


export default function Page() {
  return (
    <LayoutProvider>
      <Layout>
        <LayoutHeader>
          <LayoutHeaderButtonList>
            <LayoutHeaderButtonItem tooltip={"Problems List"}>
              <LayoutHeaderButton>
                <ListTodo /> Problems List
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
            <LayoutHeaderButtonItem>
              <LayoutHeaderButton>
                <ChevronLeft />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
            <LayoutHeaderButtonItem>
              <LayoutHeaderButton>
                <ChevronRight />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
            <LayoutHeaderButtonItem>
              <LayoutHeaderButton>
                <Shuffle />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
          </LayoutHeaderButtonList>
          <LayoutHeaderButtonList>
            <LayoutHeaderButtonItem tooltip={"Problems List"}>
              <LayoutHeaderButton>
                <ListTodo />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
            <LayoutHeaderButtonItem>
              <LayoutHeaderButton>
                <ChevronLeft />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
            <LayoutHeaderButtonItem>
              <LayoutHeaderButton>
                <ChevronRight />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
            <LayoutHeaderButtonItem>
              <LayoutHeaderButton>
                <Shuffle />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
          </LayoutHeaderButtonList>
          <LayoutHeaderButtonList>
            <LayoutHeaderButtonItem tooltip={"Problems List"}>
              <LayoutHeaderButton>
                <ListTodo />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
            <LayoutHeaderButtonItem>
              <LayoutHeaderButton>
                <ChevronLeft />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
            <LayoutHeaderButtonItem>
              <LayoutHeaderButton>
                <ChevronRight />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
            <LayoutHeaderButtonItem>
              <LayoutHeaderButton>
                <Shuffle />
              </LayoutHeaderButton>
            </LayoutHeaderButtonItem>
          </LayoutHeaderButtonList>
        </LayoutHeader>
        <LayoutContent>
          <ResizablePanelGroup
            direction="horizontal"
          >
            <ResizablePanel defaultSize={50} className="border border-border rounded-lg min-w-8">
              <ResizableLayoutContent>
                <LayoutContentHeader>
                  <LayoutContentButton>
                    <ListTodo /> code
                  </LayoutContentButton>
                  <LayoutContentButton>
                    <ListTodo /> description
                  </LayoutContentButton>
                </LayoutContentHeader>
                <LayoutContentHeader>
                  <LayoutContentButton>
                    <ListTodo /> code
                  </LayoutContentButton>
                  <LayoutContentButton>
                    <ListTodo /> description
                  </LayoutContentButton>
                </LayoutContentHeader>
                <LayoutContentBody>
                  <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-bold">Hello World</h1>
                  </div>
                </LayoutContentBody>
                <LayoutContentFooter>
                  <LayoutContentButton>
                    <ListTodo />
                  </LayoutContentButton>
                </LayoutContentFooter>
              </ResizableLayoutContent>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} >
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={50} className="min-h-8">
                  <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel defaultSize={50} className="border border-border rounded-lg min-w-8">
                      <ResizableLayoutContent>
                        <LayoutContentHeader>
                          <LayoutContentButton>
                            <ListTodo /> code
                          </LayoutContentButton>
                          <LayoutContentButton>
                            <ListTodo /> description
                          </LayoutContentButton>
                        </LayoutContentHeader>
                        <LayoutContentHeader>
                          <LayoutContentButton>
                            <ListTodo /> code
                          </LayoutContentButton>
                          <LayoutContentButton>
                            <ListTodo /> description
                          </LayoutContentButton>
                        </LayoutContentHeader>
                        <LayoutContentBody>
                          <div className="flex items-center justify-center">
                            <h1 className="text-2xl font-bold">Hello World</h1>
                          </div>
                        </LayoutContentBody>
                        <LayoutContentFooter>
                          <LayoutContentButton>
                            <ListTodo />
                          </LayoutContentButton>
                        </LayoutContentFooter>
                      </ResizableLayoutContent>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={50} className="border border-border rounded-lg min-w-8">
                      <ResizableLayoutContent>
                        <LayoutContentHeader>
                          <LayoutContentButton>
                            <ListTodo /> code
                          </LayoutContentButton>
                          <LayoutContentButton>
                            <ListTodo /> description
                          </LayoutContentButton>
                        </LayoutContentHeader>
                        <LayoutContentHeader>
                          <LayoutContentButton>
                            <ListTodo /> code
                          </LayoutContentButton>
                          <LayoutContentButton>
                            <ListTodo /> description
                          </LayoutContentButton>
                        </LayoutContentHeader>
                        <LayoutContentBody>
                          <div className="flex items-center justify-center">
                            <h1 className="text-2xl font-bold">Hello World</h1>
                          </div>
                        </LayoutContentBody>
                        <LayoutContentFooter>
                          <LayoutContentButton>
                            <ListTodo />
                          </LayoutContentButton>
                        </LayoutContentFooter>
                      </ResizableLayoutContent>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={75} className="border border-border rounded-lg min-h-8">
                  <ResizableLayoutContent>
                    <LayoutContentHeader>
                      <LayoutContentButton>
                        <ListTodo /> code
                      </LayoutContentButton>
                      <LayoutContentButton>
                        <ListTodo /> description
                      </LayoutContentButton>
                    </LayoutContentHeader>
                    <LayoutContentHeader>
                      <LayoutContentButton>
                        <ListTodo /> code
                      </LayoutContentButton>
                      <LayoutContentButton>
                        <ListTodo /> description
                      </LayoutContentButton>
                    </LayoutContentHeader>
                    <LayoutContentBody>
                      <div className="flex items-center justify-center">
                        <h1 className="text-2xl font-bold">Hello World</h1>
                      </div>
                    </LayoutContentBody>
                    <LayoutContentFooter>
                      <LayoutContentButton>
                        <ListTodo />
                      </LayoutContentButton>
                    </LayoutContentFooter>
                  </ResizableLayoutContent>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </LayoutContent>
      </Layout>
    </LayoutProvider>
  )
}

type LayoutContextProps = {

}

const LayoutContext = createContext<LayoutContextProps | null>(null)

function useLayout() {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider.")
  }
  return context
}

function LayoutProvider({ children }: PropsWithChildren) {
  return <LayoutContext.Provider value={{}}>
    <TooltipProvider delayDuration={0}>
      <div data-slot="layout-wrapper" className="h-full">
        {children}
      </div>
    </TooltipProvider>
  </LayoutContext.Provider>
}

function Layout({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("flex flex-col h-full", className)}>
    {children}
  </div>
}

function LayoutHeader({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <nav className={cn("h-12 px-2.5 flex justify-between items-center", className)}>
    {children}
  </nav>
}

function LayoutHeaderButtonList({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <ul className={cn("flex", className)}>
    {children}
  </ul>
}

function LayoutHeaderButtonItem({ children, className, tooltip }: PropsWithChildren<{ className?: string, tooltip?: string | React.ComponentProps<typeof TooltipContent> }>) {
  const buttonItem = <li
    data-slot="layout-button-item"
    className={cn("", className)}>
    {children}
  </li>

  if (!tooltip) {
    return buttonItem
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return <Tooltip>
    <TooltipTrigger>
      {buttonItem}
    </TooltipTrigger>
    <TooltipContent
      side="bottom"
      align="center"
      {...tooltip}
    />
  </Tooltip>
}

function LayoutHeaderButton({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <Button className={cn("", className)} variant={"ghost"} size={"sm"}>
    {children}
  </Button>
}

function LayoutContent({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <main className={cn("flex-1 flex items-center justify-center px-2 pb-2", className)}>
    {children}
  </main>
}

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col border-none data-[panel-group-direction=vertical]:border-none",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        " focus-visible:ring-ring relative flex w-2 items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-2 data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90 group",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-6 w-1 items-center justify-center rounded-full border group-hover:bg-primary transition-colors">

        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}


function ResizableLayoutContent({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("flex flex-col h-full", className)}>
    {children}
  </div>
}

function LayoutContentHeader({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("flex items-center gap-2 h-12 px-2.5 border-b border-border", className)}>
    {children}
  </div>
}

function LayoutContentButton({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <Button className={cn("", className)} variant={"ghost"} size={"sm"}>
    {children}
  </Button>
}

function LayoutContentFooter({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("flex items-center gap-2 h-12 px-2.5 border-t border-border ", className)}>
    {children}
  </div>
}

function LayoutContentBody({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("flex-1 flex flex-col items-center justify-center px-2 pb-2", className)}>
    {children}
  </div>
}
"use client"

import { Button } from "@workspace/ui/components/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"
import { ChevronLeft, ChevronRight, ListTodo, Shuffle } from "lucide-react"
import { createContext, PropsWithChildren, useContext } from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"


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
          <ResizableDemo />
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
  return <main className={cn("flex-1 flex items-center justify-center", className)}>
    {children}
  </main>
}




export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}


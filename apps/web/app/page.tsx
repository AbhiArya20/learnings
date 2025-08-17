"use client"

import { Button } from "@workspace/ui/components/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"
import { ChevronLeft, ChevronRight, ListTodo, Shuffle } from "lucide-react"
import { createContext, PropsWithChildren, useContext, useEffect, useId, useState } from "react"
import * as React from "react"
import * as ResizablePrimitive from "react-resizable-panels"
import { DragDropProvider, useDraggable, useDroppable } from "@dnd-kit/react"
import { debounce } from '@tanstack/react-pacer'

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
            id='resizable-panel-group-1'
          >
            <ResizablePanel defaultSize={50} className="border border-border rounded-lg min-h-8 min-w-8"
              id='resizable-panel-1'
            >
              <ResizableLayoutContent>
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
              </ResizableLayoutContent>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} id='resizable-panel-2'>
              <ResizablePanelGroup direction="vertical" id='resizable-panel-group-2'>
                <ResizablePanel defaultSize={50} className="min-h-8" id='resizable-panel-3'>
                  <ResizablePanelGroup direction="horizontal" id='resizable-panel-group-3'>
                    <ResizablePanel defaultSize={50} className="border border-border rounded-lg min-h-8 min-w-8" id='resizable-panel-4'>
                      <ResizableLayoutContent>
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
                      </ResizableLayoutContent>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={50} className="border border-border rounded-lg min-h-8 min-w-8" id='resizable-panel-5'>
                      <ResizableLayoutContent>
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

                      </ResizableLayoutContent>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={75} className="border border-border rounded-lg min-h-8 min-w-8" id='resizable-panel-6'>
                  <ResizableLayoutContent>
                    <LayoutContentHeader>
                      <LayoutContentButton>
                        instead of Button use tab component from shadcn-ui - easy
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

type Tabs = {
  id: string
  type: string,
  component: string, // description, code, editorial submissions, solutions
  enableRenderOnDemand: boolean, // i think true for editorial submissions, solutions and description and false for code results and all
}

type Panel = {
  id: string
  type: "panel",
  isActive: boolean,
  selected: number,
  size: number,
  foldBeforeSize: number, // Not sure what this is for
  children: Tabs[]
}

type PanelGroup = {
  id: string
  type: "panel-group",
  direction: "horizontal" | "vertical",
  children: Panel[] | PanelGroup[]
}

type LayoutItem = Panel | PanelGroup

type Layout = {
  id: string
  type: "panel-group",
  children: LayoutItem[]
}

type LayoutNode = {
  id: string
  type: "panel-group" | "panel"
  direction?: "horizontal" | "vertical"
  children?: string[]
  parentId?: string
  meta?: any
}

type LayoutRegistry = Record<string, LayoutNode>

type LayoutContextProps = {
  registerNode: (node: LayoutNode) => void
  unregisterNode: (id: string) => void
  getNode: (id: string) => LayoutNode | undefined
  updateNode: (id: string, update: LayoutNode) => void
  tree: LayoutRegistry
}

const LayoutContext = createContext<LayoutContextProps | null>(null)

function LayoutProvider({ children }: PropsWithChildren) {
  const [registry, setRegistry] = React.useState<LayoutRegistry>({})

  const registerNode = React.useCallback((node: LayoutNode) => {
    setRegistry((prev) => ({
      ...prev,
      [node.id]: node,
    }))
  }, [])

  const unregisterNode = React.useCallback((id: string) => {
    setRegistry((prev) => {
      const newRegistry = { ...prev }
      delete newRegistry[id]
      return newRegistry
    })
  }, [])

  const getNode = (id: string) => registry[id]

  const updateNode = React.useCallback((id: string, update: LayoutNode) => {
    setRegistry((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        ...update,
      },
    }))
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem("layout-tree")
    if (saved) {
      setRegistry(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("layout-tree", JSON.stringify(registry))
  }, [registry])

  return <LayoutContext.Provider value={{ registerNode, unregisterNode, getNode, updateNode, tree: registry }}>
    <LayoutDndProvider>
      <TooltipProvider delayDuration={0}>
        <div data-slot="layout-wrapper" className="h-full">
          {children}
        </div>
      </TooltipProvider>
    </LayoutDndProvider>
  </LayoutContext.Provider>
}

function useLayout() {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider.")
  }
  return context
}


function ResizablePanelGroup({
  id = useId(),
  direction,
  children,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup> & { id?: string }) {
  const { registerNode, unregisterNode } = useLayout()

  useEffect(() => {
    registerNode({
      id,
      type: "panel-group",
      direction,
    })

    return () => {
      unregisterNode(id)
    }
  }, [id, direction])

  return (
    <ResizablePrimitive.PanelGroup
      id={id}
      direction={direction}
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col border-none data-[panel-group-direction=vertical]:border-none",
        className
      )}
      {...props}
    >
      {children}
    </ResizablePrimitive.PanelGroup>
  )
}

function ResizablePanel({
  id = useId(),
  defaultSize,
  children,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel> & { id?: string }) {
  const { registerNode, unregisterNode, getNode, updateNode } = useLayout();

  useEffect(() => {
    registerNode({
      id,
      type: "panel",
      meta: { defaultSize },
    })

    return () => {
      unregisterNode(id)
    }
  }, [id, defaultSize])


  const resize = debounce(
    (size: number) => (updateNode(id, {
      meta: {
        defaultSize: size,
      }
    } as LayoutNode)),
    {
      wait: 500,
    }
  )

  return (
    <ResizablePrimitive.Panel id={id} defaultSize={defaultSize} className={className} data-slot="resizable-panel" onResize={
      resize
    }{...props}>
      {children}
    </ResizablePrimitive.Panel>
  )
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
        <div className="bg-border z-10 flex h-6 w-1 items-center justify-center rounded-full border group-hover:bg-primary transition-colors"></div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

function LayoutDndProvider({ children }: PropsWithChildren) {

  const { tree, updateNode } = useLayout();

  return (
    <DragDropProvider
      onDragEnd={() => console.log("onDragEnd")}
    >
      {children}
    </DragDropProvider>
  );
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
    <TooltipTrigger asChild>
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

function ResizableLayoutContent({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("flex flex-col h-full", className)}>
    {children}
  </div>
}

function LayoutContentHeader({ className, children }: PropsWithChildren<{ className?: string }>) {
  const { ref, isDropTarget } = useDroppable({
    id: 'droppable' + Math.random(),

  });
  return <div
    data-drop-target={isDropTarget ? "true" : "false"}
    className={cn("flex items-center gap-2 h-12 px-2.5 border-b border-border data-[drop-target=true]:bg-red-400", className)} ref={ref}>
    {children}
  </div>
}

function LayoutContentButton({ className, children }: PropsWithChildren<{ className?: string }>) {
  const { ref } = useDraggable({
    id: 'draggable' + Math.random(),
  });
  return <Button className={cn("", className)} variant={"ghost"} size={"sm"} ref={ref}>
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
"use client"

import { Button } from "@workspace/ui/components/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"
import { ChevronLeft, ChevronRight, ListTodo, Shuffle } from "lucide-react"
import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect, useId, useMemo, useState } from "react"
import * as ResizablePrimitive from "react-resizable-panels"
import { useDraggable, useDroppable, DragDropProvider } from "@dnd-kit/react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { useLocalStorage } from "react-use"
import { produce } from "immer"
import { useDragDropMonitor } from '@dnd-kit/react';


// -------------------- Types --------------------

type Tabs = {
  id: string
  type: "tabs"
  component: React.ReactNode
  enableRenderOnDemand: boolean
}

type BasePanel = {
  id: string
  type: "panel"
  isActive: boolean
  selected: string
  size: number
  foldBeforeSize: number
}

type PanelWithChildren = { children: PanelGroup[]; tabs?: never }
type PanelWithTabs = { tabs?: Tabs; children?: never }

type Panel = BasePanel & (PanelWithChildren | PanelWithTabs)

type PanelGroup = {
  id: string
  type: "panel-group"
  direction: "horizontal" | "vertical"
  withHandle?: boolean
  children: Panel[]
}

type PanelUpdateOptions = Partial<Pick<Panel, "selected" | "isActive" | "size">>

// -------------------- Layout --------------------

const layoutItem: PanelGroup = {
  id: "resizable-panel-group-1",
  type: "panel-group",
  direction: "horizontal",
  withHandle: true,
  children: [
    {
      id: "resizable-panel-1",
      type: "panel",
      isActive: true,
      selected: "account",
      size: 50,
      foldBeforeSize: 50,
      tabs: {
        id: "tab-1",
        type: "tabs",
        component: <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Code</TabsTrigger>
            <TabsTrigger value="password">Description</TabsTrigger>
          </TabsList>
          <TabsContent value="account" >
            Code
          </TabsContent>
          <TabsContent value="password" >
            Description
          </TabsContent>
        </Tabs>,
        enableRenderOnDemand: false,
      }
    },
    {
      id: "resizable-panel-2",
      type: "panel",
      isActive: true,
      selected: "account",
      size: 50,
      foldBeforeSize: 50,
      children: [
        {
          id: "resizable-panel-group-2",
          type: "panel-group",
          direction: "vertical",
          withHandle: true,
          children: [
            {
              id: "resizable-panel-3",
              type: "panel",
              isActive: true,
              selected: "account",
              size: 50,
              foldBeforeSize: 50,
              children: [
                {
                  id: "resizable-panel-group-3",
                  type: "panel-group",
                  direction: "horizontal",
                  withHandle: true,
                  children: [
                    {
                      id: "resizable-panel-4",
                      type: "panel",
                      isActive: true,
                      selected: "account",
                      size: 50,
                      foldBeforeSize: 50,
                      tabs: {
                        id: "tab-2",
                        type: "tabs",
                        component: <Tabs defaultValue="account">
                          <TabsList>
                            <TabsTrigger value="account">Code</TabsTrigger>
                            <TabsTrigger value="password">Description</TabsTrigger>
                          </TabsList>
                          <TabsContent value="account" >
                            Code
                          </TabsContent>
                          <TabsContent value="password" >
                            Description
                          </TabsContent>
                        </Tabs>,
                        enableRenderOnDemand: false,
                      }
                    },
                    {
                      id: "resizable-panel-5",
                      type: "panel",
                      isActive: true,
                      selected: "account",
                      size: 50,
                      foldBeforeSize: 50,
                      tabs: {
                        id: "tab-3",
                        type: "tabs",
                        component: <Tabs defaultValue="account">
                          <TabsList>
                            <TabsTrigger value="account">Code</TabsTrigger>
                            <TabsTrigger value="password">Description</TabsTrigger>
                          </TabsList>
                          <TabsContent value="account" >
                            Code
                          </TabsContent>
                          <TabsContent value="password" >
                            Description
                          </TabsContent>
                        </Tabs>,
                        enableRenderOnDemand: false,
                      }
                    },
                  ],
                },
              ],
            },
            {
              id: "resizable-panel-6",
              type: "panel",
              isActive: true,
              selected: "account",
              size: 50,
              foldBeforeSize: 50,
              tabs: {
                id: "tab-4",
                type: "tabs",
                component: <Tabs defaultValue="account">
                  <TabsList>
                    <TabsTrigger value="account">Code</TabsTrigger>
                    <TabsTrigger value="password">Description</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" >
                    Code
                  </TabsContent>
                  <TabsContent value="password" >
                    Description
                  </TabsContent>
                </Tabs>,
                enableRenderOnDemand: false,
              }
            },
          ]
        },
      ],
    },
  ]
}

// -------------------- Context --------------------

type LayoutContextProps = {
  layout: PanelGroup
  tabsMap: Map<string, React.ReactNode>
  updateLayout: (id: string, value: PanelUpdateOptions) => void
}

const LayoutContext = createContext<LayoutContextProps | null>(null)

export function useLayout() {
  const context = useContext(LayoutContext)
  if (!context) throw new Error("useLayout must be used within a LayoutProvider.")
  return context
}

// -------------------- Provider --------------------

function LayoutProvider({ children, initialLayout }: PropsWithChildren<{ initialLayout: PanelGroup }>) {
  // Extract tabs into a map for lazy render
  const { tabsMap, layoutWithoutComponents } = useMemo(() => {
    const map = new Map<string, React.ReactNode>()

    const clone = (node: PanelGroup | Panel): PanelGroup | Panel => {
      if (node.type === "panel-group") {
        return { ...node, children: node.children.map(clone) as Panel[] }
      }
      if (node.type === "panel") {
        if ("tabs" in node && node.tabs) {
          map.set(node.tabs.id, node.tabs.component)
          return { ...node, tabs: { ...node.tabs, component: undefined } }
        }
        if (node.children) {
          return { ...node, children: node.children.map(clone) as PanelGroup[] }
        }
        return { ...node }
      }
      return { ...node }
    }

    return { tabsMap: map, layoutWithoutComponents: clone(initialLayout) as PanelGroup }
  }, [initialLayout])

  const [layout, setLayout] = useLocalStorage<PanelGroup>("layout", layoutWithoutComponents)
  const [hydration, setHydration] = useState(false)
  useEffect(() => {
    setHydration(true)
  }, [])

  const updateLayout = useCallback((id: string, value: PanelUpdateOptions) => {
    setLayout(old =>
      produce(old!, draft => {
        const updateNode = (node: PanelGroup | Panel) => {
          if (node.type === "panel-group") node.children.forEach(updateNode)
          if (node.type === "panel") {
            if (node.id === id) Object.assign(node, value)
            if (node.children) node.children.forEach(updateNode)
          }
        }
        updateNode(draft)
      })
    )
  }, [setLayout])

  // Move tab from one panel to another
  const moveTab = useCallback((tabId: string, fromPanelId: string, toPanelId: string) => {
    setLayout(old =>
      produce(old!, draft => {
        let tabToMove: Tabs | undefined = undefined;
        // Remove tab from source panel
        const removeTab = (node: PanelGroup | Panel): boolean => {
          if (node.type === "panel-group") return node.children.some(removeTab);
          if (node.type === "panel" && node.tabs && node.tabs.id === tabId && node.id === fromPanelId) {
            tabToMove = node.tabs;
            node.tabs = undefined;
            return true;
          }
          if (node.type === "panel" && node.children) return node.children.some(removeTab);
          return false;
        };
        removeTab(draft);
        // Add tab to target panel
        const addTab = (node: PanelGroup | Panel): boolean => {
          if (node.type === "panel-group") return node.children.some(addTab);
          if (node.type === "panel" && node.id === toPanelId && !node.tabs && tabToMove) {
            node.tabs = tabToMove;
            return true;
          }
          if (node.type === "panel" && node.children) return node.children.some(addTab);
          return false;
        };
        addTab(draft);
      })
    );
  }, [setLayout]);

  if (!hydration) return null
  return (
    <LayoutContext.Provider value={{ layout: layout!, tabsMap, updateLayout }}>
      {/* @ts-expect-error: moveTab prop is injected for DnD logic */}
      <LayoutDndProvider moveTab={moveTab}>
        <TooltipProvider delayDuration={0}>
          <div data-slot="layout-wrapper" className="h-full w-full">
            {children}
          </div>
        </TooltipProvider>
      </LayoutDndProvider>
    </LayoutContext.Provider>
  )
}

// -------------------- Resizable Panels --------------------

// keyboardResizeBy ?: number | null;
// onLayout ?: PanelGroupOnLayout | null;
// storage ?: PanelGroupStorage;
// tagName ?: keyof HTMLElementTagNameMap;
//  dir?: "auto" | "ltr" | "rtl" | undefined;

const ResizablePanelGroup = React.memo(function ResizablePanelGroup({ id, direction, children, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup> & { id: string }) {
  const { updateLayout, tabsMap } = useLayout();
  const store = useMemo(() => ({
    getItem(name: string) {

    },
    setItem(name: string, value: string) {
    }
  }), [id]);

  return (
    <ResizablePrimitive.PanelGroup
      id={id}
      data-slot="resizable-panel-group"
      keyboardResizeBy={4}
      direction={direction}
      // storage={store}
      autoSaveId={id}
      className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col border-none data-[panel-group-direction=vertical]:border-none", className)}
      {...props}
    >
      {children}
    </ResizablePrimitive.PanelGroup>
  )
})

const Droppable = ({ id, children, className, }: { id: string, children: React.ReactNode, className?: string }) => {
  const { ref, isDropTarget } = useDroppable({ id })
  return <div className="h-full w-full">
    <div ref={ref} className="h-full w-full">
      {children}
    </div>
    <div className={cn("absolute z-100 scale-90 rounded-lg inset-0 h-full w-full pointer-events-none animation-color duration-300", isDropTarget && "bg-blue-500/5 ring-2 ring-blue-600")}></div>
  </div>
}

const ResizablePanel = React.memo(function ResizablePanel({ id, defaultSize, children, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.Panel> & { id: string }) {
  return (
    <ResizablePrimitive.Panel
      id={id}
      data-slot="resizable-panel"
      defaultSize={defaultSize}
      className={cn("relative h-full", className)}
      collapsible
      {...props}
    >
      {children}
    </ResizablePrimitive.Panel>
  )
})

const ResizableHandle = React.memo(function ResizableHandle({
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
})

// -------------------- Layout Renderer --------------------

function LayoutRenderer() {
  const { layout } = useLayout()
  return <LayoutRendererInternal layout={layout} />
}

const LayoutRendererInternal = React.memo(function LayoutRendererInternal({ layout }: { layout: PanelGroup | Panel }) {
  const { tabsMap } = useLayout()
  useDragDropMonitor({
    onCollision(event, manager) {

    }
  });


  if (layout.type === "panel-group") {
    return (
      <ResizablePanelGroup direction={layout.direction} id={layout.id} className="border border-border rounded-lg min-h-8 min-w-8">
        {layout.children.map((child, idx) => (
          <React.Fragment key={child.id}>
            <LayoutRendererInternal layout={child} />
            {idx < layout.children.length - 1 && layout.withHandle && <ResizableHandle withHandle />}
          </React.Fragment>
        ))}
      </ResizablePanelGroup>
    )
  }

  if (layout.type === "panel") {
    if (layout.tabs) {
      return (
        <>
          <ResizablePanel defaultSize={layout.size} id={layout.id} className="border-2 border-blue-400 rounded-lg min-h-8 min-w-8 relative">
            <Droppable id={layout.id}>
              <div className="flex flex-col h-full w-full ">{tabsMap.get(layout.tabs.id)}</div>
            </Droppable>
          </ResizablePanel>
        </>
      )
    }

    if (layout.children) {
      return (
        <ResizablePanel defaultSize={layout.size} id={layout.id}>
          {layout.children.map(child => (
            <LayoutRendererInternal key={child.id} layout={child} />
          ))}
        </ResizablePanel>
      )
    }
  }

  return null
})

// -------------------- Drag & Drop --------------------

function LayoutDndProvider({ children }: PropsWithChildren) {
  return <DragDropProvider onDragEnd={() => console.log("onDragEnd")}>{children}</DragDropProvider>
}

// -------------------- Tabs --------------------

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex h-full flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const { ref, isDropTarget } = useDroppable({ id: useId() })
  return <TabsPrimitive.List data-slot="tabs-list" data-drop-target={isDropTarget} ref={ref}
    className={cn(
      "flex items-center gap-2 h-12 px-2.5 border-b border-border",
      className
    )}
    {...props}
  />
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { ref } = useDraggable({ id: useId() })
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      ref={ref}
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring max-w-fit focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 flex flex-col items-center justify-center px-2 pb-2", className)}
      {...props}
    />
  )
}

// -------------------- Export Page --------------------

const buttonList = [
  { icon: <ListTodo />, tooltip: "Problems List", text: "Problems List" },
  { icon: <ChevronLeft />, tooltip: "Go Back" },
  { icon: <ChevronRight />, tooltip: "Go Forward" },
  { icon: <Shuffle />, tooltip: "Shuffle" },
]

export default function Page() {
  return (
    <div className={cn("flex flex-col h-full")}>
      <nav className={cn("h-12 px-2.5 flex justify-between items-center")}>
        <ul className={cn("flex")}>
          {buttonList.map(({ icon, tooltip, text }, idx) => (
            <li key={idx} className={"flex items-center gap-2"}>
              <Tooltip>
                <TooltipTrigger asChild><Button className={cn("")} variant="ghost" size="sm">{icon} {text ? text : ""}</Button></TooltipTrigger>
                <TooltipContent side="bottom" align="center">{tooltip}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
        <ul className={cn("flex")}>
          {buttonList.map(({ icon, tooltip, text }, idx) => (
            <li key={idx} className={"flex items-center gap-2"}>
              <Tooltip>
                <TooltipTrigger asChild><Button className={cn("")} variant="ghost" size="sm">{icon} {text ? text : ""}</Button></TooltipTrigger>
                <TooltipContent side="bottom" align="center">{tooltip}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
        <ul className={cn("flex")}>
          {buttonList.map(({ icon, tooltip, text }, idx) => (
            <li key={idx} className={"flex items-center gap-2"}>
              <Tooltip>
                <TooltipTrigger asChild><Button className={cn("")} variant="ghost" size="sm">{icon} {text ? text : ""}</Button></TooltipTrigger>
                <TooltipContent side="bottom" align="center">{tooltip}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </nav>
      <main className={cn("flex h-full w-full items-center justify-center px-2 pb-2",)}>
        <LayoutProvider initialLayout={layoutItem}>
          <LayoutRenderer />
        </LayoutProvider>
      </main>
    </div>
  )
}
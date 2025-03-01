"use client";
import ExcalidrawComponent from "@/components/excalidraw-components/excalidraw-component";
import HoverCardMDX from "@/components/modified-ui/hover-card-mdx";

export default function Home() {
  return (
    <HoverCardMDX trigger="hover">
      <ExcalidrawComponent />
    </HoverCardMDX>
  );
}

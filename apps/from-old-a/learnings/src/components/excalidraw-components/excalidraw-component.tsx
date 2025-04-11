"use client";
import dynamic from "next/dynamic";
const ExcalidrawWrapper = dynamic(
  async () =>
    (await import("@/components/excalidraw-components/excalidraw-wrapper"))
      .default,
  {
    ssr: false,
  }
);

export default function ExcalidrawComponent({
  className,
}: {
  className?: string;
}) {
  const definition = `flowchart TD
                        A[Christmas] -->|Get money| B(Go shopping)
                        B --> C{Let me think}
                        C -->|One| D[Laptop]
                        C -->|Two| E[iPhone]
                        C -->|Three| F[Car]`;

  return (
    <div id="excalidraw" className="flex justify-center">
      <ExcalidrawWrapper mermaidDefinition={definition} className={className} />
    </div>
  );
}

"use client";
import {
  Excalidraw,
  MainMenu,
  THEME,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";
import { ComponentProps, useEffect, useState } from "react";
import { parseMermaidToExcalidraw } from "@excalidraw/mermaid-to-excalidraw";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
type ExcalidrawProps = ComponentProps<typeof Excalidraw>;
type ExcalidrawAPI = ExcalidrawProps["excalidrawAPI"];
type ExcalidrawImperativeAPI = Parameters<NonNullable<ExcalidrawAPI>>[0];

type ExcalidrawWrapperProps = {
  mermaidDefinition: string;
  className?: string;
};

const ExcalidrawWrapper = ({
  mermaidDefinition,
  className,
}: ExcalidrawWrapperProps) => {
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);

  console.log(mermaidDefinition);

  useEffect(() => {
    (async () => {
      if (!excalidrawAPI) {
        return;
      }

      if (mermaidDefinition === "") {
        excalidrawAPI.resetScene();
        return;
      }

      const { elements, files } = await parseMermaidToExcalidraw(
        mermaidDefinition,
        {}
      );

      console.log(elements);

      excalidrawAPI.updateScene({
        elements: convertToExcalidrawElements(elements),
      });
      excalidrawAPI.scrollToContent(excalidrawAPI.getSceneElements(), {
        fitToContent: true,
      });

      if (files) {
        excalidrawAPI.addFiles(Object.values(files));
      }
    })();
  }, [mermaidDefinition, excalidrawAPI]);

  const { resolvedTheme } = useTheme();

  return (
    <div
      className={cn(
        "relative h-[calc(100svh-72px)] rounded-md overflow-hidden flex justify-center aspect-square",
        className
      )}
    >
      <Excalidraw
        zenModeEnabled
        viewModeEnabled
        isCollaborating={false}
        gridModeEnabled={false}
        // objectsSnapModeEnabled={false}
        // detectScroll={false}
        // autoFocus={false}
        // validateEmbeddable={false}
        // handleKeyboardGlobally={false}
        UIOptions={{
          canvasActions: {
            changeViewBackgroundColor: false,
            clearCanvas: false,
            export: false,
            loadScene: false,
            saveAsImage: false,
            toggleTheme: false,
            saveToActiveFile: false,
          },
        }}
        initialData={{
          //   scrollToContent: true,

          appState: {
            //     showWelcomeScreen: false,
            //     pasteDialog: { shown: false, data: null },
            //     penMode: false,
            //     penDetected: false,
            //     exportBackground: false,
            //     exportEmbedScene: false,
            //     exportWithDarkMode: false,
            //     exportScale: 100,
            //     objectsSnapModeEnabled: false,
            //     viewBackgroundColor: "#fafafa",
            //     currentItemFontFamily: 1,
            //     openMenu: null,
            //     isResizing: false,
            //     scrolledOutside: false,
            //     zenModeEnabled: true,
            //     selectedElementsAreBeingDragged: false,
            //     showStats: false,
            //     contextMenu: null,
            // viewModeEnabled: true,
          },
        }}
        theme={resolvedTheme === "dark" ? THEME.DARK : THEME.LIGHT}
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
      >
        <MainMenu></MainMenu>
      </Excalidraw>
    </div>
  );
};

export default ExcalidrawWrapper;

"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      storageKey="theme"
      defaultTheme="system"
      // forcedTheme="dark"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
      themes={["light", "dark", "system"]}
      attribute="class" // class or data-* ex- data-theme, data-mode, data-color etc...
      value={{ dark: "dark", light: "light" }}
      scriptProps={{ "data-cfasync": "false" }}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

//TODO: Configure the next-theme

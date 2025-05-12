"use client"
import { Geist, Geist_Mono } from "next/font/google"
import { DndContext } from '@dnd-kit/core';

import "@learnings/ui/globals.css"
import { ThemeProviders } from "@/components/theme-providers"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <ThemeProviders><DndContext>{children}</DndContext></ThemeProviders>
      </body>
    </html>
  )
}
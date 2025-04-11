import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning - Abhi Arya",
  description:
    "Learning is a personal app I've built to track and reflect on my own learning journey. The idea behind it came from the need to document and review insights I gain daily-whether it's from a conversation, article, or new experience—without the pressure to share it with others. I wanted a space where I could quickly capture what I've learned, organize it by topics, and easily revisit those lessons over time. Building this app taught me about the power of reflection and how much value there is in simply writing down knowledge to make it stick. Through the process, I learned the importance of simplicity in design—keeping it intuitive and free of distractions. I also discovered how rewarding it is to see my personal growth captured in one place, which motivates me to keep learning and improving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

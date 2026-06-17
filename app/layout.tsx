import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CodeBackground from "../components/CodeBackground";
import CursorWaves from "../components/CursorWaves";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Ibrahim | AI Engineer",
  description:
    "Portfolio of Omar Ibrahim — AI Engineer specializing in data engineering, LLM systems, and intelligent applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col overflow-x-hidden">
        <CodeBackground />
        <CursorWaves />
        <div className="relative z-10 flex flex-col min-h-full">{children}</div>
      </body>
    </html>
  );
}

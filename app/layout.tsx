"use client";

import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}

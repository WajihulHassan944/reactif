"use client";

import type { Metadata } from "next";
import "./globals.css";
import { onest } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer/Footer";
import TopInfoBar from "@/components/navbar/TopInfoBar";
import { Toaster } from 'sonner'
import { useAuth } from "@/hooks/useAuth";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // routes where layout should be hidden
  const hideLayout = ["/register"].includes(pathname);
 useAuth();
  return (
    <html lang="en">
      <body className={`${onest.className}`}>
        {!hideLayout && <TopInfoBar />}
        <Toaster position="top-right" richColors />
        {/* {!hideLayout && <Navbar />} */}
          <div>{children}</div>
          {!hideLayout &&  <Footer />}
      </body>
    </html>
  );
}

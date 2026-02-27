"use client";

import type { ReactNode } from "react";
import "./globals.css";
import { onest } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer/Footer";
import TopInfoBar from "@/components/navbar/TopInfoBar";
import { Toaster } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideLayout = ["/register"].includes(pathname);

  useAuth();

  return (
    <html lang="en">
      <Head>
        <title>Reactif | Automotive Visual Communication Expert</title>
        <meta
          name="description"
          content="Reactif is a leader in automotive visual communication. Vehicle wrapping, marking, and advertising with professional quality. Get a free quote today!"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Reactif | Automotive Visual Communication Expert" />
        <meta
          property="og:description"
          content="Transform your vehicles into advertising tools with Reactif. Complete visual communication solutions for the automotive sector."
        />
        <meta property="og:url" content="https://reactif-mocha.vercel.app" />
        <meta property="og:site_name" content="Reactif" />
        <meta
          property="og:image"
          content="https://reactif-mocha.vercel.app/og/og-home.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Reactif Automotive Visual Communication" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reactif | Automotive Visual Communication Expert" />
        <meta
          name="twitter:description"
          content="Transform your vehicles into advertising tools with Reactif. Vehicle wrapping, marking, and advertising with professional quality."
        />
        <meta
          name="twitter:image"
          content="https://reactif-mocha.vercel.app/og/og-home.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* Theme color */}
        <meta name="theme-color" content="#111111" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Reactif",
              url: "https://reactif-mocha.vercel.app",
              logo: "https://reactif-mocha.vercel.app/logo.png",
              sameAs: [
                "https://www.facebook.com/reactif",
                "https://www.twitter.com/reactif",
                "https://www.linkedin.com/company/reactif",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+33 1 23 45 67 89",
                  contactType: "customer service",
                  email: "contact@company.fr",
                  areaServed: "FR",
                },
              ],
            }),
          }}
        />
      </Head>

      <body className={`${onest.className}`}>
        {!hideLayout && <TopInfoBar />}
        <Toaster position="top-right" richColors />
        <div>{children}</div>
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
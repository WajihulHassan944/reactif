import Container from "@/components/container";
import ContactFormSection from "@/components/Home/ContactFormSection";
import ContactSection from "@/components/Home/ContactSection";
import Hero from "@/components/Home/Hero";
import TailoredServices from "@/components/Home/TailoredServices";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Reactif | Automotive Visual Communication Expert",
  description:
    "Reactif is a leader in automotive visual communication. Vehicle wrapping, marking, and advertising with professional quality. Get a free quote today!",

  metadataBase: new URL("https://reactif-mocha.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Reactif | Automotive Visual Communication Expert",
    description:
      "Transform your vehicles into advertising tools with Reactif. Complete visual communication solutions for the automotive sector.",
    url: "https://reactif-mocha.vercel.app",
    siteName: "Reactif",
    images: [
      {
        url: "https://reactif-mocha.vercel.app/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "Reactif Automotive Visual Communication",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reactif | Automotive Visual Communication Expert",
    description:
      "Transform your vehicles into advertising tools with Reactif. Vehicle wrapping, marking, and advertising with professional quality.",
    images: ["https://reactif-mocha.vercel.app/og/og-home.png"],
    creator: "@reactif",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  themeColor: "#111111",
};

export default function Home() {
  return (
    <Container>
      {/* JSON-LD Structured Data */}
      <Script id="organization-jsonld" type="application/ld+json">
        {JSON.stringify({
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
        })}
      </Script>

      <Hero />
      <section id="services">
        <TailoredServices />
      </section>
      <WhyChooseUs />
      <ContactSection />
      <section id="contact">
        <ContactFormSection />
      </section>
    </Container>
  );
}
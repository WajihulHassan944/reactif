"use client";

import Head from "next/head";
import Container from "@/components/container";
import ContactFormSection from "@/components/Home/ContactFormSection";
import ContactSection from "@/components/Home/ContactSection";
import Hero from "@/components/Home/Hero";
import TailoredServices from "@/components/Home/TailoredServices";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
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
      </Head>

      <Container>
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
    </>
  );
}
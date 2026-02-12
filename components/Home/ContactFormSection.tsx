"use client";

import Image from "next/image";
import { SectionHeader } from "../shared/SectionHeader";
import ContactForm from "../forms/ContactForm";


export default function WhyChooseUs() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background */}
      <Image
        src="/assets/hero/Gradient.png"
        alt="Background"
        fill
        className="object-cover -z-10"
      />
      
      <div className=" mx-auto px-40">

        {/* HEADER */}
    <SectionHeader
  badgeText="Get in Touch"
  title={
    <>
      START YOUR <span
        style={{
          background: "linear-gradient(90deg, #F262B5 0%, #9F73F1 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        PROJECT
      </span> TODAY
    </>
  }
  description="Let&apos;s discuss how we can transform your vision into reality"
/>



<ContactForm />

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Navbar from "../navbar/navbar";
import { ArrowRight, Car } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center flex-col overflow-hidden">
<Navbar />
      {/* Background Image */}
      <Image
        src="/assets/hero/Gradient.png"
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />


      {/* Content Container */}
      <div className=" mx-auto w-full pr-12 pl-20 pb-15 pt-15 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div className="space-y-3">

          {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#515151] text-sm text-[#F5F5F5]  backdrop-blur-sm">
  <Car size={23} color="#F262B5"  />
  AUTOMOTIVE EXPERTS
</div>
          {/* Heading */}
          <h1
            className="font-mulish text-5xl md:text-6xl font-bold leading-tight"
            style={{
              background:
                "linear-gradient(90deg, #FAFAFA 0%, #5FC5FF 81.25%, #9F73F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight:'1.2'
            }}
          >
            TRANSFORM YOUR
            <br />
            VEHICLES INTO
            <br />
            ADVERTISING TOOLS
          </h1>

          {/* Description */}
          <p className="text-[#F5F5F5] text-lg max-w-xl leading-relaxed">
            Leader In Visual Communication For The Automotive Sector. Vehicle
            Wrapping, Marking, And Advertising With Uncompromising Professional
            Quality.
          </p>

          {/* Buttons */}
       <div className="flex items-center gap-6">

  {/* Free Quote Button */}
  <button
    className="font-sans px-8 py-3 rounded-full text-white font-medium flex items-center gap-2 relative"
    style={{
       background:
      "conic-gradient(from 147.75deg at 62.65% 113.44%, #5FC5FF 0deg, #D43077 55deg, #8155FF 212.88deg, #789DFF 285.58deg, #9F73F1 356.54deg, #5FC5FF 360deg)",
 
      boxShadow: "0px 0px 80px 0px #D43077",
    }}
  >
    Free Quote
    <ArrowRight size={18} />
  </button>

  {/* Our Projects Button (Fixed Rounded Gradient Border) */}
  <button
    className="font-sans px-8 py-3 rounded-full font-medium flex items-center gap-2 text-white relative"
    style={{
      background:
        "linear-gradient(#000, #000) padding-box, linear-gradient(91.06deg, #4D43ED 0.9%, #9C3CD3 49.1%, #D22877 99.19%) border-box",
      border: "1px solid transparent",
      boxShadow: "inset 0px 4px 24.9px 0px #FFFFFF40",
    }}
  >
    Our Projects
  </button>

</div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-end md:justify-end pt-5">
          <Image
            src="/assets/hero/car_with_shadow.png"
            alt="Car"
            width={700}
            height={500}
            priority
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}

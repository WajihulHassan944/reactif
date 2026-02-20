"use client";

import Image from "next/image";
import Navbar from "../navbar/navbar";
import { ArrowRight, Car } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center flex-col overflow-hidden">

      <Navbar />

      {/* Background Image */}

      <Image
        src="/assets/hero/gradient.png"
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />


      {/* Content Container */}

      <div className="mx-auto w-full px-4 sm:px-6 md:pl-20 md:pr-12 pt-10 md:pt-15 pb-10 md:pb-15 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center md:items-start">


        {/* LEFT CONTENT */}

        <div className="space-y-4 md:space-y-3 text-center md:text-left">


          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full border border-[#515151] text-xs md:text-sm text-[#F5F5F5] backdrop-blur-sm">

            <Car size={20} className="md:w-[23px] md:h-[23px]" color="#F262B5" />

            AUTOMOTIVE EXPERTS

          </div>



          {/* Heading */}

          <h1
            className="font-mulish text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{
              background:
                "linear-gradient(90deg, #FAFAFA 0%, #5FC5FF 81.25%, #9F73F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: "1.2",
            }}
          >
            TRANSFORM YOUR
            <br />
            VEHICLES INTO
            <br />
            ADVERTISING TOOLS
          </h1>



          {/* Description */}

          <p className="text-[#F5F5F5] text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">

            Leader In Visual Communication For The Automotive Sector. Vehicle
            Wrapping, Marking, And Advertising With Uncompromising Professional
            Quality.

          </p>



          {/* Buttons */}

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6 justify-center md:justify-start">


            {/* Free Quote */}

            <Link  href="/all-vendor-services"
              className="font-sans px-6 md:px-8 py-3 rounded-full text-white font-medium flex items-center gap-2 relative"
              style={{
                background:
                  "conic-gradient(from 98deg at 62.65% 113.44%, #5FC5FF 0deg, #FFAC89 135deg, #8155FF 213deg, #789DFF 286deg, #9F73F1 357deg)",
                boxShadow: "0px 0px 80px #D43077",
              }}
            >

              Free Quote

              <ArrowRight size={18} />

            </Link>



            {/* Our Projects */}

            <Link href="/all-vendor-services"
              className="font-sans px-6 md:px-8 py-3 rounded-full font-medium flex items-center gap-2 text-white relative"
              style={{
                background:
                  "linear-gradient(#000, #000) padding-box, linear-gradient(91.06deg, #4D43ED 0.9%, #9C3CD3 49.1%, #D22877 99.19%) border-box",
                border: "1px solid transparent",
                boxShadow: "inset 0px 4px 24.9px 0px #FFFFFF40",
              }}
            >

              Our Projects

            </Link>


          </div>


        </div>



        {/* RIGHT IMAGE */}

        <div className="relative flex justify-center md:justify-end pt-6 md:pt-5">

          <Image
            src="/assets/hero/car_with_shadow.png"
            alt="Car"
            width={700}
            height={500}
            priority
            className="object-contain w-[90%] sm:w-[80%] md:w-auto max-w-[700px]"
          />

        </div>



      </div>

    </section>
  );
}

"use client";

import Image from "next/image";
import { IconType } from "react-icons";
import { FaLightbulb, FaPaintRoller, FaCarSide, FaPalette } from "react-icons/fa";

/* =========================
   Reusable Service Card
========================= */

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  icon: IconType;
  variant?: "pink" | "blue";
}

function ServiceCard({
  title,
  subtitle,
  description,
  services,
  icon: Icon,
  variant = "pink",
}: ServiceCardProps) {
  const isPink = variant === "pink";

  return (
  <div className="relative  rounded-[24px] overflow-hidden">
 <div
        className="absolute inset-0 blur-[20px] opacity-100"
        style={{
          background:
            "conic-gradient(from 132deg at 40.63% 50.41%, rgba(242, 98, 181, 0.00) 125.179deg, rgba(95, 197, 255, 0.20) 193.412deg, rgba(255, 172, 137, 0.20) 216.021deg, rgba(129, 85, 255, 0.20) 236.071deg, rgba(120, 157, 255, 0.20) 259.953deg, rgba(159, 115, 241, 0.00) 311.078deg)",
        }}
      />
          <div className="relative z-10 rounded-[24px] border border-[#F5F5F580] bg-black/40 backdrop-blur-xl p-8 flex flex-col gap-8">

      {/* ICON WRAPPER */}
      <div
        className={`w-14 h-14 p-2.5 rounded-xl inline-flex justify-center items-center ${
          isPink ? "bg-pink-400/20" : "bg-blue-400/20"
        }`}
      >
        <div
          className={`w-10 h-10 p-2 rounded-lg flex justify-center items-center ${
            isPink
              ? "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"
              : "bg-blue-400"
          }`}
        >
          <Icon className="w-6 h-6 text-zinc-100" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="self-stretch flex flex-col justify-start items-start gap-4">

        {/* TITLE + SUBTITLE */}
        <div className="self-stretch flex flex-col gap-4">
          <div className="w-64 flex flex-col gap-2">
            <h3 className="text-neutral-100 text-3xl font-bold font-['HK_Grotesk']">
              {title}
            </h3>
            <p className="text-neutral-100/80 text-base font-bold font-['HK_Grotesk']">
              {subtitle}
            </p>
          </div>

          <p className="self-stretch text-neutral-100/80 text-base font-medium font-['HK_Grotesk']">
            {description}
          </p>
        </div>

        {/* KEY SERVICES */}
        <div className="w-96 flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <p className="text-neutral-100 text-base font-medium font-['HK_Grotesk']">
              Key Services
            </p>

            <div className="inline-flex gap-8">
              {/* Left Column */}
              <div className="w-44 flex flex-col gap-4">
                {services.slice(0, 2).map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isPink ? "bg-pink-400" : "bg-blue-400"
                      }`}
                    />
                    <span className="text-neutral-100 text-base font-medium font-['HK_Grotesk']">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="w-45 flex flex-col gap-4">
                {services.slice(2, 4).map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isPink ? "bg-pink-400" : "bg-blue-400"
                      }`}
                    />
                    <span className="text-neutral-100 text-base font-medium font-['HK_Grotesk']">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div
        className={`self-stretch h-11 px-3 py-1.5 bg-white rounded-[100px] inline-flex justify-center items-center gap-3 ${
          isPink ? "" : "outline outline-1 outline-black"
        }`}
      >
        <span className="text-zinc-800 text-lg font-semibold font-['HK_Grotesk']">
          Learn More
        </span>
     
      </div>
</div>
    </div>
  );
}

/* =========================
   Main Section
========================= */

export default function TailoredServices() {
  const servicesData = [
    {
      title: "Visual Advertising",
      subtitle: "Signboards & Stickers",
      description:
        "Eye-catching signage solutions including illuminated signs, dimensional letters, and custom stickers.",
      services: [
        "Full & Partial Wraps",
        "Paint Protection",
        "Fleet Branding",
        "Window Graphics",
      ],
      icon: FaLightbulb,
      variant: "pink" as const,
    },
    {
      title: "Signalétique",
      subtitle: "Signboards & Stickers",
      description:
        "Eye-catching signage solutions including illuminated signs, dimensional letters, and custom stickers.",
      services: [
        "Full & Partial Wraps",
        "Paint Protection",
        "Fleet Branding",
        "Window Graphics",
      ],
      icon: FaCarSide,
      variant: "blue" as const,
    },
    {
      title: "Vehicle Branding",
      subtitle: "Creative Solutions",
      description:
        "Professional vehicle branding designed to maximize exposure and brand identity.",
      services: [
        "Full Wrap Design",
        "Corporate Branding",
        "Color Customization",
        "Protective Films",
      ],
      icon: FaPaintRoller,
      variant: "blue" as const,
    },
    {
      title: "Creative Studio",
      subtitle: "Design & Concept",
      description:
        "Innovative visual concepts tailored to elevate your brand presence.",
      services: [
        "Brand Identity",
        "Visual Concepts",
        "Mockups",
        "Print Design",
      ],
      icon: FaPalette,
      variant: "pink" as const,
    },
  ];

  return (
    <section className="relative w-full py-28 pt-19 overflow-hidden">

      {/* Background */}
      <Image
        src="/assets/hero/Gradient.png"
        alt="Background"
        fill
        className="object-cover -z-10"
      />

      <div className="mx-auto px-20">

        {/* HEADER */}
        <div className="relative text-center mb-20">

          {/* Ellipse */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-26 opacity-80">
            <Image
              src="/assets/header_elipse.png"
              alt="Ellipse"
              width={220}
              height={120}
            />
          </div>

          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-wide">
            TAILORED{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #5FC5FF 0%, #9F73F1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SERVICES
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Complete Visual Communication Solutions Adapted To Your Needs,
            With Particular Expertise In The Automotive Sector.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

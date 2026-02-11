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
    <div className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-10 overflow-hidden group transition-all duration-500 hover:border-white/40">

      {/* Top Glow */}
      <div
        className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] blur-3xl opacity-70 ${
          isPink
            ? "bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30"
            : "bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-indigo-500/30"
        }`}
      />

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white text-xl ${
          isPink
            ? "bg-gradient-to-br from-pink-500 to-purple-600"
            : "bg-gradient-to-br from-blue-500 to-cyan-600"
        }`}
      >
        <Icon />
      </div>

      <h3 className="text-2xl font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-400 mb-6 font-medium">
        {subtitle}
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>

      <div className="mb-6">
        <p className="text-white mb-4 font-medium">Key Services</p>

        <div className="grid grid-cols-2 gap-y-3 text-gray-300 text-sm">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  isPink ? "bg-pink-500" : "bg-blue-500"
                }`}
              />
              {service}
            </div>
          ))}
        </div>
      </div>

      <button className="w-full py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
        Learn More →
      </button>
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

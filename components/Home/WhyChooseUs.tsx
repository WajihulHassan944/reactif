"use client";

import Image from "next/image";
import { IconType } from "react-icons";
import { FiPhone } from "react-icons/fi";
import { FaShieldAlt, FaAward, FaUsers, FaTools, FaRocket } from "react-icons/fa";

/* =========================
   Reusable Card
========================= */

interface WhyCardProps {
  title: string;
  description: string;
  icon: IconType;
  variant?: "pink" | "blue" | "red";
}

function WhyCard({
  title,
  description,
  icon: Icon,
  index,
}: WhyCardProps & { index: number }) {

  const isPink = index === 0 || index === 3;

  return (
    <div className="rounded-[12px] border border-[#F5F5F580] bg-[#14161C] p-8 transition hover:border-white/40">

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl mb-6"
        style={{
          background: `
            linear-gradient(${isPink ? "#F262B5" : "#5FC5FF"}, ${isPink ? "#F262B5" : "#5FC5FF"}) padding-box,
            linear-gradient(258.29deg, rgba(255,255,255,0.05) -1.28%, #FFFFFF 44.49%, rgba(255,255,255,0.05) 100%) border-box
          `,
          border: "0.5px solid transparent",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: `
            inset 0px 2px 4px 0px #FFFFFF66,
            inset 0px -2px 4px 0px #00000033
          `,
        }}
      >
        <Icon size={22} />
      </div>

      <h3 className="text-white text-xl font-semibold mb-3 font-hk">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>

      {/* Bottom Arrow + Line */}
      <div className="flex items-center gap-2">
        <span
          className={`w-10 h-[2px] ${
            isPink ? "bg-[#F262B5]" : "bg-[#5FC5FF]"
          }`}
        />
        <span className="text-white/70 text-[30px]">›</span>
      </div>
    </div>
  );
}


/* =========================
   Main Section
========================= */

export default function WhyChooseUs() {
  const whyData = [
    {
      title: "Recognized Expertise",
      description:
        "Over 15 years of experience in automotive visual communication",
      icon: FiPhone,
      variant: "pink" as const,
    },
    {
      title: "Recognized Expertise",
      description:
        "Over 15 years of experience in automotive visual communication",
      icon: FaShieldAlt,
      variant: "blue" as const,
    },
    {
      title: "Recognized Expertise",
      description:
        "Over 15 years of experience in automotive visual communication",
      icon: FaAward,
      variant: "red" as const,
    },

    /* 2nd Row */
    {
      title: "Recognized Expertise",
      description:
        "Over 15 years of experience in automotive visual communication",
      icon: FaUsers,
      variant: "pink" as const,
    },
    {
      title: "Recognized Expertise",
      description:
        "Over 15 years of experience in automotive visual communication",
      icon: FaTools,
      variant: "blue" as const,
    },
    {
      title: "Recognized Expertise",
      description:
        "Over 15 years of experience in automotive visual communication",
      icon: FaRocket,
      variant: "red" as const,
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background */}
      <Image
        src="/assets/hero/Gradient.png"
        alt="Background"
        fill
        className="object-cover -z-10"
      />
      
      <div className=" mx-auto px-30">

        {/* HEADER */}
        <div className="text-center mb-15">

          {/* Commitment Badge */}
     <div
  className="inline-flex items-center justify-center
             px-8 py-2
             rounded-full
             text-white text-[16px] font-medium
             mb-5 font-sans"
  style={{
    background:
      "conic-gradient(from 147.75deg at 62.65% 113.44%, #5FC5FF 0deg, #D43077 55deg, #8155FF 212.88deg, #789DFF 285.58deg, #9F73F1 356.54deg, #5FC5FF 360deg)",
    boxShadow: "0px 0px 80px 0px #D43077",
  }}
>
  Our Commitment
</div>



          {/* Heading */}
          <h2
            className="text-5xl md:text-6xl font-semibold mb-5"
            style={{
              background:
                "linear-gradient(90deg, #F262B5 0%, #9F73F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WHY CHOOSE US
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto text-[20px]">
            Our Commitment To Excellence And Your Satisfaction Makes Us The
            Ideal Partner For Your Visual Communication Projects.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {whyData.map((item, index) => (
            <WhyCard key={index} {...item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

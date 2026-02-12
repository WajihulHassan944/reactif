import DeliveryService from "@/components/AllVendorServices/DeliveryService";
import SpecialistCard from "@/components/cards/SpecialistCard";
import Navbar from "@/components/navbar/navbar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Image from "next/image";
import React from "react";

const specialists = [
  {
    name: "React Studio",
    role: "Premium Specialist",
    rating: 4.9,
    reviews: 128,
    location: "Geneva, CH",
    tags: ["Luxury PPF", "Ceramic", "Tints"],
    experience: "12+ Years",
    price: "150.00",
    avatarColor: "#F472B6", // pink-400
  },
  {
    name: "React Studio",
    role: "Premium Specialist",
    rating: 4.9,
    reviews: 128,
    location: "Geneva, CH",
    tags: ["Luxury PPF", "Ceramic", "Tints"],
    experience: "12+ Years",
    price: "150.00",
    avatarColor: "#60A5FA", // blue-400
  },
  {
    name: "React Studio",
    role: "Premium Specialist",
    rating: 4.9,
    reviews: 128,
    location: "Geneva, CH",
    tags: ["Luxury PPF", "Ceramic", "Tints"],
    experience: "12+ Years",
    price: "150.00",
    avatarColor: "#818CF8", // indigo-400
  },
  {
    name: "React Studio",
    role: "Premium Specialist",
    rating: 4.9,
    reviews: 128,
    location: "Geneva, CH",
    tags: ["Luxury PPF", "Ceramic", "Tints"],
    experience: "12+ Years",
    price: "150.00",
    avatarColor: "#2563EB", // blue-600
  },
];

const page = () => {
  return (
    <>
    <section className="relative overflow-hidden">
      <Navbar />

      {/* Background */}
      <Image
        src="/assets/AllVendorServices/background.png"
        alt="Background"
        fill
        className="object-cover -z-10 bg-[#010304]"
      />

      <div className="mx-auto px-30 py-20">

        <SectionHeader
          badgeText="Our Commitment"
          title={
            <>
              SELECT A{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #F262B5 0%, #9F73F1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SPECIALIST
              </span>
            </>
          }
          description="Choose a certified vendor to explore their specific protection packages and designs."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {specialists.map((specialist, index) => (
            <SpecialistCard key={index} {...specialist} />
          ))}
        </div>
      </div>
      
    </section>

    <div className="bg-[#010304] px-30 pb-30">
        
<DeliveryService />
    </div>
</>
  );
};

export default page;

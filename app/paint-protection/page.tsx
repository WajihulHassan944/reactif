"use client";

import { useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PaintDetailsHeader from "@/components/PaintProtection/PaintDetailsHeader";
import ServicesRow from "@/components/PaintProtection/ServicesRow";
import CarPreviewSection from "@/components/PaintProtection/CarPreviewSection";
import PaintProtectionCard from "@/components/PaintProtection/PaintProtectionCard";

// Type for activeItem, which can either be a string (item value) or null
type ActiveItem = string | null;

export default function Page() {
  const [activeItem, setActiveItem] = useState<ActiveItem>("frontBlock"); // State with initial value of null

  return (
    <section className="relative overflow-hidden">
      <Navbar />

      <Image
        src="/assets/AllVendorServices/background.png"
        alt="Background"
        fill
        className="object-cover -z-10 bg-[#010304]"
      />

      <div className="w-full mx-auto px-30 pb-20 pt-10 flex flex-col gap-14">
        <div className="relative inline-flex flex-col justify-start items-start gap-14">
          <PaintDetailsHeader />

          <div className="self-stretch flex flex-col justify-start items-center gap-10 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-12">
              <ServicesRow />
              <div className="self-stretch flex items-stretch gap-12">
                <CarPreviewSection activeItem={activeItem} />
                <PaintProtectionCard
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-[60px] px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-stone-500 inline-flex items-center justify-center gap-6">
            <ChevronLeft className="w-4 h-4 text-neutral-50" />
            <ChevronRight className="w-4 h-4 text-neutral-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

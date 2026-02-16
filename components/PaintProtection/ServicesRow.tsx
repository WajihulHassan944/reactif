"use client";

import { useRef } from "react";
import {
  Paintbrush,
  Sun,
  Truck,
  Tag,
  Printer,
  FileText,
  Sticker,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  { name: "Paint Protection", icon: Paintbrush },
  { name: "Window Tinting", icon: Sun },
  { name: "Vehicle Wrapping", icon: Truck },
  { name: "Branding", icon: Tag },
  { name: "Motorcycle", icon: Truck },
  { name: "Print", icon: Printer },
  { name: "Signage", icon: FileText },
  { name: "Stickers", icon: Sticker },
  { name: "Apparel", icon: Truck },
  { name: "Office", icon: Briefcase },
];

export default function ServicesRow({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full pb-1 pt-11 overflow-hidden">
      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 whitespace-nowrap overflow-x-auto scroll-smooth px-4 md:px-1 no-scrollbar py-1"
      >
        {services.map((service, idx) => {
          const Icon = service.icon;
          const isActive = activeCategory === service.name;

          // 🎯 Custom Active Color Logic
          const activeClass =
            service.name === "Paint Protection"
              ? "bg-green-600 text-white"
              : "bg-[#F262B5] text-white";

          return (
            <div
              key={idx}
              onClick={() => setActiveCategory(service.name)}
              className={`flex-shrink-0 inline-flex h-11 px-5 py-2.5 rounded-lg items-center gap-2 justify-center cursor-pointer transition-all duration-200
                ${
                  isActive
                    ? activeClass
                    : "outline outline-1 outline-stone-500 text-stone-500 hover:bg-stone-800"
                }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  isActive ? "text-white" : "text-stone-500"
                }`}
              />
              <div
                className={`text-base font-medium font-hk ${
                  isActive
                    ? "text-white font-bold"
                    : "text-stone-500"
                }`}
              >
                {service.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute right-0 top-0 px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-stone-500 hidden md:inline-flex items-center justify-center gap-6">
        <ChevronLeft
          className="w-4 h-4 text-neutral-50 cursor-pointer"
          onClick={() => scroll("left")}
        />
        <ChevronRight
          className="w-4 h-4 text-neutral-50 cursor-pointer"
          onClick={() => scroll("right")}
        />
      </div>
    </div>
  );
}

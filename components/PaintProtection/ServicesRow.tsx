"use client";

import { Paintbrush, Sun, Truck, Tag, Printer, FileText, Sticker, Briefcase } from "lucide-react";

const services = [
  { name: "Paint Protection", icon: Paintbrush, variant: "filled", color: "bg-green-600 text-white" },
  { name: "Window Tinting", icon: Sun },
  { name: "Vehicle Wrapping", icon: Truck },
  { name: "Branding", icon: Tag },
  { name: "Motocycle", icon: Truck },
  { name: "Print", icon: Printer },
  { name: "Signage", icon: FileText },
  { name: "Stickers", icon: Sticker },
  { name: "Apparel", icon: Truck },
  { name: "Office", icon: Briefcase },
];

export default function ServicesRow() {
  return (
    <div className="w-full py-1 overflow-x-hidden">
      <div className="flex gap-4 whitespace-nowrap">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const isFilled = service.variant === "filled";

          return (
            <div
              key={idx}
              className={`inline-flex h-11 px-5 py-2.5 rounded-lg items-center gap-2 justify-center 
                ${isFilled ? service.color : "outline outline-1 outline-stone-500 text-stone-500"}`}
            >
              <Icon className={`w-4 h-4 ${isFilled ? "text-white" : "text-stone-500"}`} />
              <div className={`text-base font-medium font-['HK_Grotesk'] ${isFilled ? "text-white font-bold" : "text-stone-500"}`}>
                {service.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

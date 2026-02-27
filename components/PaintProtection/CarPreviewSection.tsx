"use client";

import { useEffect, useState } from "react";

interface Service {
  id: number;
  name: string;
  description: string;
  category_id: number;
  sub_category_id: number;
  service_image: string;
  price: number;
  fields: any[];
}

interface CarPreviewSectionProps {
  activeItem: string | null;
  activeCategory: string | null;
  services: Service[];
}

export default function CarPreviewSection({
  activeItem,
  activeCategory,
  services,
}: CarPreviewSectionProps) {
  const [currentService, setCurrentService] = useState<Service | null>(null);

  // Update current service based on activeItem
  useEffect(() => {
    if (!activeItem || services.length === 0) {
      setCurrentService(null);
      return;
    }

    const service = services.find((s) => s.id.toString() === activeItem);
    setCurrentService(service || null);
  }, [activeItem, services]);

  // Determine if category is Paint Protection (for coloring)
  const isPaint = activeCategory === "Paint Protection";
  const outlineColor = isPaint ? "outline-green-600" : "outline-[#F262B5]";
  const textColor = isPaint ? "text-green-600" : "text-[#F262B5]";
  const dotColor = isPaint ? "bg-green-600" : "bg-[#F262B5]";

  // Resolve car image
  const carImage =
    currentService?.service_image ||
    "/assets/PaintProtection/paintProtection/carOne.png";

  // Labels for side info
  const topLabel = isPaint ? "PPF Protection" : activeCategory;
  const topDetail = isPaint ? currentService?.name || "Front End" : activeCategory;
  const bottomLabel = isPaint ? "Protected Zone" : "Highlighted Service";

  return (
    <div className="relative flex-1 rounded-3xl border border-slate-700 overflow-hidden min-h-[300px] md:min-h-[490px] flex items-center justify-center">
      
      {/* Main Image */}
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={carImage}
          alt="Preview"
          className="object-contain max-w-[200px] md:max-w-full"
        />
      </div>

      {/* Side Info */}
      <div className="absolute left-3 sm:left-5 md:left-7 top-1/2 -translate-y-1/2 w-[230px] sm:w-[150px] md:w-90 h-full flex flex-col justify-between items-start py-3 md:py-5">
        
        {/* Top Labels */}
        <div className="px-2 md:px-3 py-1.5 flex flex-col gap-2">
          <div
            className={`w-fit px-2.5 py-1.5 rounded outline outline-1 outline-offset-[-1px] ${outlineColor} flex justify-center items-center`}
          >
            <div className={`${textColor} text-xs sm:text-sm md:text-base font-medium`}>
              {topLabel}
            </div>
          </div>
          <div className="text-neutral-50 text-xs sm:text-sm md:text-base font-bold">
            {topDetail}
          </div>
        </div>

        {/* Bottom Labels */}
        <div className="px-2 md:px-3 py-1.5 rounded flex items-center gap-2">
          <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${dotColor} rounded-full`} />
          <div className="text-neutral-400 text-xs sm:text-sm md:text-base font-medium">
            {bottomLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useEffect } from "react";
import { Shield, ArrowRight } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

interface PaintProtectionCardProps {
  activeItem: string | null;
  activeCategory: string | null;
  setActiveItem: (item: string | null) => void;
}

export default function PaintProtectionCard({
  activeItem,
  setActiveItem,
  activeCategory,
}: PaintProtectionCardProps) {

  const categoryConfig = {
    "Paint Protection": {
      description:
        "Ultimate shield for your vehicle bodywork against scratches and chips.",
      color: "green",
      options: [
        { label: "Front Block Protection", value: "frontBlock" },
        { label: "Side/Impact Areas", value: "sideImpact" },
        { label: "Quarter Front", value: "quarterFront" },
        { label: "Full PPF Coverage", value: "fullPPF" },
      ],
    },

    "Window Tinting": {
      description:
        "Premium privacy and UV protection for all vehicle types.",
      color: "pink",
      options: [
        { label: "Tinted Headlights", value: "tintedHeadlights" },
        { label: "City Car (3 Doors)", value: "city3" },
        { label: "City Car (5 Doors)", value: "city5" },
        { label: "Sedan (Berlin)", value: "sedan" },
        { label: "SUV Estate", value: "suv" },
        { label: "VAN / Truck", value: "van" },
        { label: "Front Windows (non Homologated)", value: "frontNonH" },
        { label: "Wind Shieldtint (non Homologated)", value: "windshield" },
        { label: "Sun Visor Strip", value: "visor" },
        { label: "Panoramic Roof", value: "roof" },
      ],
    },

    "Vehicle Wrapping": {
      description:
        "Complete color change services with premium vinyls.",
      color: "pink",
      options: [
        { label: "Convertible", value: "convertible" },
        { label: "Coupe", value: "coupe" },
        { label: "City Car", value: "cityCar" },
        { label: "Sedan", value: "sedanWrap" },
        { label: "SUV", value: "suvWrap" },
        { label: "VAN", value: "vanWrap" },
      ],
    },

    Branding: {
      description:
        "Turn your fleet into a mobile billboard.",
      color: "pink",
      options: [
        { label: "Minimalist Ad (Car)", value: "minCar" },
        { label: "Standard Ad (Car)", value: "stdCar" },
        { label: "Impactful Ad (Car)", value: "impactCar" },
        { label: "Minimalist Ad (Van)", value: "minVan" },
        { label: "Standard Ad (Van)", value: "stdVan" },
        { label: "Impactful Ad (Van)", value: "impactVan" },
      ],
    },

    Motorcycle: {
      description:
        "Custom deco kits and full wrapping for bikes.",
      color: "pink",
      options: [
        { label: "Deco Kit", value: "decoKit" },
        { label: "Full Wrapping", value: "fullWrapBike" },
      ],
    },

    Print: {
      description:
        "High quality marketing materials.",
      color: "pink",
      options: [
        { label: "Business Card", value: "businessCard" },
        { label: "Flyers & Posters", value: "flyers" },
        { label: "Panels / Boards", value: "panels" },
        { label: "Construction Site Signs", value: "construction" },
        { label: "Beach Flags & Rolls ups", value: "flags" },
        { label: "Photocall", value: "photocall" },
        { label: "Window Dressing", value: "windowDress" },
        { label: "Frosted Glass (Sable)", value: "frostedGlass" },
      ],
    },

    Signage: {
      description:
        "Light up your business storefront.",
      color: "pink",
      options: [
        { label: "Interior / Safety Signage", value: "interior" },
        { label: "Backlight Sign", value: "backlight" },
        { label: "Cutlight Sign", value: "cutlight" },
        { label: "Light Box", value: "lightBox" },
        { label: "Cutout Letter", value: "cutout" },
        { label: "Neon Sign", value: "neon" },
        { label: "Directional Panel", value: "directional" },
        { label: "Totem Display", value: "totem" },
      ],
    },

    Stickers: {
      description:
        "Light up your business storefront.",
      color: "pink",
      options: [
        { label: "Custom Stickers", value: "customSticker" },
        { label: "Instagram Stickers", value: "insta" },
        { label: "Facebook Stickers", value: "facebook" },
        { label: "Tiktok Stickers", value: "tiktok" },
        { label: "QR Code Stickers", value: "qr" },
        { label: "Snapchat Stickers", value: "snap" },
      ],
    },

    Apparel: {
      description:
        "Branded workwear and clothing.",
      color: "pink",
      options: [
        { label: "Polo T-Shirt", value: "polo" },
        { label: "Zip Jacket", value: "zip" },
        { label: "Heavy Jacket / Coat", value: "coat" },
        { label: "Works Pants", value: "pants" },
        { label: "Beanie", value: "beanie" },
        { label: "Helmet", value: "helmet" },
      ],
    },

    Office: {
      description:
        "Professional stamps and stationery.",
      color: "pink",
      options: [
        { label: "Custom Stamps", value: "customStamp" },
        { label: "Date Stamps", value: "dateStamp" },
      ],
    },

  } as const;



  const current =
    categoryConfig[
      activeCategory as keyof typeof categoryConfig
    ] || categoryConfig["Paint Protection"];



  /**
   * ✅ FIXED LOGIC
   * Always select first option when category changes
   */
  useEffect(() => {

    if (current.options.length > 0) {

      setActiveItem(current.options[0].value);

    }

  }, [activeCategory]);



  const isGreen = current.color === "green";


  const activeOutline =
    isGreen ? "outline-green-600" : "outline-[#F262B5]";


  const activeText =
    isGreen ? "text-green-600" : "text-[#F262B5]";


  const activeBg =
    isGreen ? "bg-green-600" : "bg-[#F262B5]";


  const summaryBg =
    isGreen
      ? "bg-green-600/10 outline-green-600/10"
      : "bg-[#F262B5]/10 outline-[#F262B5]/10";



  return (

    <div className="w-full md:w-auto p-5 md:p-6 rounded-3xl outline outline-1 outline-slate-700 flex flex-col items-center gap-3">


      <div className="flex items-center gap-2 w-full md:pl-6">

        <Shield className="w-4 h-4 text-neutral-50" />

        <div className="text-neutral-50 text-base font-bold font-hk">

          {activeCategory}

        </div>

      </div>



      <div className="text-neutral-400 text-sm md:text-base font-medium font-hk w-full md:w-96">

        {current.description}

      </div>



      {current.options.map((item) => (

        <div
          key={item.value}
          onClick={() => setActiveItem(item.value)}
          className={`w-full md:w-96 h-11 px-4 py-3 rounded-lg flex justify-between items-center cursor-pointer transition
          ${
            activeItem === item.value
              ? `outline outline-1 ${activeOutline}`
              : "outline outline-1 outline-slate-700"
          }`}
        >

          <div
            className={`text-sm font-bold font-hk
            ${
              activeItem === item.value
                ? activeText
                : "text-stone-300"
            }`}
          >

            {item.label}

          </div>


          {activeItem === item.value && (

            <FaCheckCircle className={`${activeText} text-md`} />

          )}

        </div>

      ))}



      <div
        className={`w-full md:w-96 p-4 rounded-lg outline outline-1 flex flex-col gap-2.5 ${summaryBg}`}
      >


        <div className={`text-xs font-bold font-hk ${activeText}`}>

          Configuration Summary

        </div>



        <div className="text-neutral-50 text-xs font-bold font-hk">

          {activeItem
            ? `${activeCategory} — ${
                current.options.find(
                  (o) => o.value === activeItem
                )?.label
              }`
            : "No selection"}

        </div>



        <Link href="/order/address"
          className={`w-full px-4 py-3 rounded-lg flex justify-center items-center gap-2.5 cursor-pointer hover:opacity-90 transition ${activeBg}`}
        >

          <div className="text-neutral-50 text-xs font-bold font-hk">

            Get Quote

          </div>

          <ArrowRight className="w-4 h-4 text-neutral-50" />

        </Link>


      </div>


    </div>

  );

}

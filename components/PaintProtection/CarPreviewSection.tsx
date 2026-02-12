"use client";

interface CarPreviewSectionProps {
  activeItem: string | null;
}

export default function CarPreviewSection({ activeItem }: CarPreviewSectionProps) {
  // Set car image based on activeItem
  let carImage = "/assets/PaintProtection/carOne.png"; // Default image

  if (activeItem === "sideImpact") {
    carImage = "/assets/PaintProtection/carTwo.png";
  } else if (activeItem === "quarterFront") {
    carImage = "/assets/PaintProtection/carThree.png";
  } else if (activeItem === "fullPPF") {
    carImage = "/assets/PaintProtection/carFour.png";
  }

  return (
    <div className="relative flex-1 rounded-3xl border border-slate-700 overflow-hidden min-h-full">
      {/* Car Image */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={carImage}
          alt="Car Protection"
          className="w-[547.14px] h-64 object-contain"
        />
      </div>

      {/* Side Info (Absolutely Positioned Left) */}
      <div className="absolute left-7 top-1/2 -translate-y-1/2 w-40 h-full inline-flex flex-col justify-between items-start py-5">
        {/* Top Text Block */}
        <div className="px-3 py-1.5 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch px-2.5 py-1.5 rounded outline outline-1 outline-offset-[-1px] outline-green-600 inline-flex justify-center items-center gap-2.5">
            <div className="w-28 text-green-600 text-base font-medium font-['HK_Grotesk']">
              PPF Protection
            </div>
          </div>

          <div className="self-stretch text-neutral-50 text-base font-bold font-['HK_Grotesk']">
            Front End
          </div>
        </div>

        {/* Protected Zone */}
        <div className="self-stretch px-3 py-1.5 rounded inline-flex justify-center items-center gap-2">
          <div className="w-3 h-3 bg-green-600 rounded-full" />
          <div className="text-neutral-400 text-base font-medium font-['HK_Grotesk']">
            Protected Zone
          </div>
        </div>
      </div>
    </div>
  );
}

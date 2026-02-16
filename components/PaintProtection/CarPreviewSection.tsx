"use client";

interface CarPreviewSectionProps {
  activeItem: string | null;
  activeCategory: string | null;
}

export default function CarPreviewSection({
  activeItem,
  activeCategory,
}: CarPreviewSectionProps) {

  const isPaint = activeCategory === "Paint Protection";

  const outlineColor = isPaint
    ? "outline-green-600"
    : "outline-[#F262B5]";

  const textColor = isPaint
    ? "text-green-600"
    : "text-[#F262B5]";

  const dotColor = isPaint
    ? "bg-green-600"
    : "bg-[#F262B5]";

  // =========================
  // 🔥 CENTRAL CONFIG
  // =========================

  const categoryConfig: Record<
    string,
    {
      folder: string;
      images: string[];
      options?: string[];
    }
  > = {
    "Paint Protection": {
      folder: "paintProtection",
      images: [
        "carOne.png",
        "carTwo.png",
        "carThree.png",
        "carFour.png",
      ],
      options: ["frontBlock", "sideImpact", "quarterFront", "fullPPF"],
    },

    Signage: {
      folder: "",
      images: ["signage.png"],
    },

    "Window Tinting": {
      folder: "window_tinting",
      images: ["carOne.png", "carTwo.png", "carOne.png"],
      options: [
        "tintedHeadlights",
        "city3",
        "city5",
        "sedan",
        "suv",
        "van",
        "frontNonH",
        "windshield",
        "visor",
        "roof",
      ],
    },

    Branding: {
      folder: "branding",
      images: [
        "carOne.png",
        "carTwo.png",
        "carThree.png",
        "carFour.png",
        "carFive.png",
        "carSix.png",
      ],
      options: [
        "minCar",
        "stdCar",
        "impactCar",
        "minVan",
        "stdVan",
        "impactVan",
      ],
    },

    Office: {
      folder: "",
      images: ["office.png"],
      options: ["customStamp", "dateStamp"],
    },

    Apparel: {
      folder: "",
      images: ["apparel.png"],
      options: ["polo", "zip", "coat", "pants", "beanie", "helmet"],
    },

    Stickers: {
      folder: "",
      images: ["stickers.png"],
      options: ["polo", "insta", "facebook", "tiktok", "qr", "snap"],
    },

    Print: {
      folder: "print",
      images: [
        "printOne.png",
        "printTwo.png",
        "printThree.png",
        "printFour.png",
        "printFive.png",
        "printSix.png",
      ],
      options: [
        "businessCard",
        "flyers",
        "panels",
        "construction",
        "flags",
        "Photocall",
        "windowDress",
        "frostedGlass",
      ],
    },

    Motorcycle: {
      folder: "motorcycle",
      images: ["motorcycleOne.png", "motorcycleTwo.png"],
      options: ["decoKit", "fullWrapBike"],
    },
  };

  // =========================
  // 🧠 IMAGE RESOLVER
  // =========================

  let carImage =
    "/assets/PaintProtection/paintProtection/carOne.png";

  if (activeCategory && categoryConfig[activeCategory]) {
    const { folder, images, options } =
      categoryConfig[activeCategory];

    let imageIndex = 0;

    if (options && activeItem) {
      const index = options.indexOf(activeItem);
      imageIndex =
        index >= 0
          ? Math.min(index, images.length - 1)
          : 0;
    }

    const basePath = "/assets/PaintProtection";

    carImage =
      folder !== ""
        ? `${basePath}/${folder}/${images[imageIndex]}`
        : `${basePath}/${images[0]}`;
  }

  // =========================
  // 🎨 UI
  // =========================

  return (
    <div className="relative flex-1 rounded-3xl border border-slate-700 overflow-hidden min-h-[300px] md:min-h-[490px] flex items-center justify-center">

      {/* Image */}
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={carImage}
          alt="Preview"
          className="object-contain max-w-[200px] md:max-w-full"
        />
      </div>

      {/* Side Info */}
      <div className="absolute left-3 sm:left-5 md:left-7 top-1/2 -translate-y-1/2 w-[130px] sm:w-[150px] md:w-40 h-full flex flex-col justify-between items-start py-3 md:py-5">

        {/* Top */}
        <div className="px-2 md:px-3 py-1.5 flex flex-col gap-2">

          <div
            className={`px-2.5 py-1.5 rounded outline outline-1 outline-offset-[-1px] ${outlineColor} flex justify-center items-center`}
          >
            <div className={`${textColor} text-xs sm:text-sm md:text-base font-medium`}>
              {isPaint ? "PPF Protection" : activeCategory}
            </div>
          </div>

          <div className="text-neutral-50 text-xs sm:text-sm md:text-base font-bold">
            {isPaint ? "Front End" : activeCategory}
          </div>

        </div>

        {/* Bottom */}
        <div className="px-2 md:px-3 py-1.5 rounded flex items-center gap-2">
          <div className={`w-2.5 h-2.5 md:w-3 md:h-3 ${dotColor} rounded-full`} />
          <div className="text-neutral-400 text-xs sm:text-sm md:text-base font-medium">
            {isPaint ? "Protected Zone" : "Highlighted Service"}
          </div>
        </div>

      </div>
    </div>
  );
}

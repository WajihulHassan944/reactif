import { Shield, ArrowRight } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

// Define the types for the props
interface PaintProtectionCardProps {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
}

export default function PaintProtectionCard({
  activeItem,
  setActiveItem,
}: PaintProtectionCardProps) {
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="p-6 rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-700 inline-flex flex-col gap-3">
      {/* Title */}
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-neutral-50" />
        <div className="text-neutral-50 text-base font-bold font-['HK_Grotesk'] text-center">
          Paint Protection
        </div>
      </div>

      {/* Description */}
      <div className="text-neutral-400 text-base font-medium font-['HK_Grotesk'] w-96">
        Ultimate shield for your vehicle bodywork against scratches and chips.
      </div>

      {/* Sections */}
      {[
        { label: "Front Block Protection", value: "frontBlock" },
        { label: "Side/Impact Areas", value: "sideImpact" },
        { label: "Quarter Front", value: "quarterFront" },
        { label: "Full PPF Coverage", value: "fullPPF" },
      ].map((item) => (
        <div
          key={item.value}
          onClick={() => handleItemClick(item.value)}
          className={`w-96 h-11 px-4 py-3 rounded-lg flex justify-between items-center cursor-pointer ${
            activeItem === item.value
              ? "outline outline-1 outline-offset-[-1px] outline-green-600"
              : "outline outline-1 outline-offset-[-1px] outline-slate-700"
          }`}
        >
          <div
            className={`text-neutral-50 text-sm font-bold font-['HK_Grotesk'] ${
              activeItem === item.value ? "text-green-600" : "text-stone-300"
            }`}
          >
            {item.label}
          </div>
          {activeItem === item.value && (
            <FaCheckCircle className="text-green-600 text-md" />
          )}
        </div>
      ))}

      {/* Configuration Summary */}
      <div className="w-96 p-4 bg-green-600/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-green-600/10 flex flex-col gap-2.5">
        <div className="text-green-600 text-xs font-bold font-['HK_Grotesk']">
          Configuration Summary
        </div>
        <div className="text-neutral-50 text-xs font-bold font-['HK_Grotesk']">
          {activeItem ? `${activeItem} Coverage` : "No selection"}
        </div>

        {/* Get Quote Button */}
        <div className="self-stretch px-4 py-3 bg-green-600 rounded-lg shadow-[0px_4px_10px_0px_rgba(210,40,119,0.25)] flex justify-center items-center gap-2.5 cursor-pointer">
          <div className="text-neutral-50 text-xs font-bold font-['HK_Grotesk']">
            Get Quote
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-50" />
        </div>
      </div>
    </div>
  );
}

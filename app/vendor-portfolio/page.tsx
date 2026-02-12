import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import ServiceCard from "@/components/cards/ServiceCard";
import { MapPin, Star, CheckCircle } from "lucide-react";

const services = [
  {
    category: "Paint Protection",
    title: "Full Body Stealth",
    features: ["Self Healing", "Anti-Yellowing", "10 Yrs Warranty"],
    price: "125.00",
    popular: true,
  },
  {
    category: "Window Tinting",
    title: "Privacy Glass Edition",
    features: ["UV Protection", "Heat Reduction", "Lifetime Warranty"],
    price: "125.00",
  },
  {
    category: "Paint Protection",
    title: "Full Body Stealth",
    features: ["Self Healing", "Anti-Yellowing", "10 Yrs Warranty"],
    price: "125.00",
  },
  {
    category: "Window Tinting",
    title: "Full Body Stealth",
    features: ["Self Healing", "Anti-Yellowing", "10 Yrs Warranty"],
    price: "125.00",
  },
];

export default function Page() {
  return (
    <section className="relative overflow-hidden">
      <Navbar />

      <Image
        src="/assets/AllVendorServices/background.png"
        alt="Background"
        fill
        className="object-cover -z-10 bg-[#010304]"
      />

      <div className="w-full mx-auto px-35 py-20 flex flex-col gap-14">

        {/* Vendor Header */}
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 bg-pink-400 rounded-full flex items-center justify-center shadow-inner">
              <CheckCircle className="text-white" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold text-neutral-100 font-hk">
                  Reactif Studio
                </h2>
                <CheckCircle size={20} className="text-blue-500" />
              </div>

              <div className="flex items-center gap-4 text-xs text-stone-300 mt-1">
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  Geneva, CH
                </div>

                <div className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-neutral-50">4.9</span>
                  <span>(127 Reviews)</span>
                </div>

                <span className="text-emerald-500">Available</span>
              </div>
            </div>
          </div>

          <button className="px-5 py-2.5 bg-white rounded-full text-black font-medium">
            Contact
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-3">
          <div className="px-5 py-2 bg-pink-400 rounded-full text-white">
            All
          </div>
          <div className="px-5 py-2 bg-gray-900 rounded-full border border-stone-500/50 text-stone-300">
            Paint Protection
          </div>
          <div className="px-5 py-2 bg-gray-900 rounded-full border border-stone-500/50 text-stone-300">
            Window Tinting
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}

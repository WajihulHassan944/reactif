'use client';
import React, { useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import DesignPathModal from "./DesignPathModal";

const services = [
  {
    title: "Full & Partial Wraps",
    description:
      "Complete vehicle transformation or strategic partial coverage. We use premium vinyl to turn your vehicle into a stunning marketing asset that protects the original paint.",
    image: "/assets/subcategories/wrap.png",
    icon: "/assets/subcategories/icons/one.svg",
    color: "pink",
    benefits: [
      "High-impact brand visibility",
      "Protects original paintwork",
      "5-7 year durability guarantee",
    ],
  },
  {
    title: "Paint Protection",
    description:
      "Keep your vehicle looking brand new with our invisible Paint Protection Film (PPF). Self-healing technology guards against stone chips, scratches, and road debris.",
    image: "/assets/subcategories/paint.png",
    icon: "/assets/subcategories/icons/two.svg",
    color: "blue",
    benefits: [
      "Invisible protection layer",
      "Self-healing properties",
      "Maintains resale value",
    ],
  },
  {
    title: "Fleet Branding",
    description:
      "Consistent and professional branding across your entire company fleet. From design to implementation, we ensure your business identity is uniform on every vehicle.",
    image: "/assets/subcategories/van.png",
    icon: "/assets/subcategories/icons/three.svg",
    color: "pink",
    benefits: [
      "Unified corporate identity",
      "Volume pricing available",
      "Nationwide installation network",
    ],
  },
  {
    title: "Window Graphics",
    description:
      "Utilize glass surfaces for advertising or privacy. We offer perforated vinyl (one-way vision), opaque decals, and frosted films for both vehicles and storefronts.",
    image: "/assets/subcategories/tinting.png",
    icon: "/assets/subcategories/icons/four.svg",
    color: "blue",
    benefits: [
      "Privacy without blocking light",
      "Cost-effective advertising",
      "UV ray reduction",
    ],
  },
];

const SubCategories = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-neutral-700/60 backdrop-blur-sm bg-black/10 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent" />

                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                      service.color === "pink"
                        ? "bg-pink-600"
                        : "bg-blue-600"
                    } shadow-lg`}
                  >
                    <img src={service.icon} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <p className="text-md font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                    Benefits
                  </p>
                  <div className="flex flex-col gap-2">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CircleCheck
                          size={18}
                          className={`${
                            service.color === "pink"
                              ? "text-pink-500"
                              : "text-blue-500"
                          }`}
                        />
                        <span className="text-[15px] text-neutral-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button onClick={() => setOpenModal(true)} className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition">
                  Select Service
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DesignPathModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
};

export default SubCategories;
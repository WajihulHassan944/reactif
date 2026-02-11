"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleRequestQuote = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="relative py-5 overflow-hidden">

      {/* Background Image */}
      <Image
        src="/assets/hero/Gradient.png" // change path if needed
        alt="Background"
        fill
        className="object-cover -z-10"
      />

    
    
      <div className=" mx-auto px-30">

        {/* Glass Container */}
        <div className="rounded-[12px] border border-[#F5F5F580] py-20 px-16 text-center">

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{
              background:
                "linear-gradient(90deg, #FF6EC7 0%, #9F73F1 50%, #5FC5FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            READY TO BRING YOUR PROJECT TO LIFE?
          </h2>

          {/* Description */}
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto mb-10 font-hk">
           Contact us today for a free personalized quote. Our team of experts is available to advise you.
          </p>

          {/* Button */}
      <center> <Button
  onClick={handleRequestQuote}
  disabled={loading}
  className="px-5 py-2.5 text-[15px] rounded-full font-medium 
             bg-white text-black font-sans
             flex items-center gap-2
             transition-all duration-300
             hover:opacity-90"
  style={{
    boxShadow: "0px 0px 85px 0px #FFFFFF",
  }}
>
  {loading ? (
    "Requesting..."
  ) : (
    <>
      Request a Free Quote
      <ArrowRight size={18} />
    </>
  )}
</Button></center>

        </div>
      </div>
    </section>
  );
}

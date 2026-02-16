"use client";

import { useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import PaintDetailsHeader from "@/components/PaintProtection/PaintDetailsHeader";
import ServicesRow from "@/components/PaintProtection/ServicesRow";
import CarPreviewSection from "@/components/PaintProtection/CarPreviewSection";
import PaintProtectionCard from "@/components/PaintProtection/PaintProtectionCard";


type ActiveItem = string | null;


export default function Page() {


  const [activeItem, setActiveItem] =
    useState<ActiveItem>("frontBlock");
const [activeCategory, setActiveCategory] = useState("Paint Protection");



  return (


    <section className="relative overflow-hidden">


      <Navbar />


      {/* Background */}


      <Image
        src="/assets/AllVendorServices/background.png"
        alt="Background"
        fill
        className="object-cover -z-10 bg-[#010304]"
      />



      {/* Container */}


      <div className="w-full mx-auto px-4 sm:px-6 md:px-30 pb-12 md:pb-20 pt-6 md:pt-10 flex flex-col gap-10 md:gap-14">


        <div className="relative flex flex-col">


          {/* Header */}


          <PaintDetailsHeader />



          {/* Services */}


          <div className="flex flex-col items-center gap-8 md:gap-10 overflow-hidden">


            <div className="w-full flex flex-col gap-8 md:gap-12">


             <ServicesRow
  activeCategory={activeCategory}
  setActiveCategory={setActiveCategory}
/>




              {/* Preview + Card */}


              <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 md:gap-12">


                {/* Car Preview */}


                <div className="w-full lg:flex-1">


                  <CarPreviewSection
                    activeItem={activeItem}
                    
  activeCategory={activeCategory}
                  />


                </div>



                {/* Protection Card */}


                <div className="w-full lg:max-w-[480px] pr-1 pb-1">


                  <PaintProtectionCard
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                     activeCategory={activeCategory}
                  />


                </div>



              </div>


            </div>


          </div>


        </div>


      </div>


    </section>


  );

}

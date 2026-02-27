"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import PaintDetailsHeader from "@/components/PaintProtection/PaintDetailsHeader";
import ServicesRow from "@/components/PaintProtection/ServicesRow";
import CarPreviewSection from "@/components/PaintProtection/CarPreviewSection";
import PaintProtectionCard from "@/components/PaintProtection/PaintProtectionCard";
import { API_BASE_URL } from "@/lib/constants";

type ActiveItem = string | null;

interface Subcategory {
  id: number;
  name: string;
  description: string;
  category_image: string;
}

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

export default function Page() {
  const params = useParams();
  const id = params?.id as string;

  const [activeItem, setActiveItem] = useState<ActiveItem>("frontBlock");
  const [activeCategory, setActiveCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [status, setStatus] = useState<number>(1);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    if (!id) return;

    const fetchCategory = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/categories/${id}`);
        const data = await res.json();

        const category = data?.data;
        if (!category) return;

        setCategoryName(category.name);
        setStatus(category.status);
        setSubcategories(category.subcategories || []);

        if (category.subcategories?.length > 0) {
          setActiveCategory(category.subcategories[0].name);
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  // Fetch services and filter by selected subcategory
  useEffect(() => {
    if (!activeCategory || subcategories.length === 0) return;

    const fetchServices = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/services`);
        const data = await res.json();

        // Match services to currently selected subcategory
        const filteredServices = data?.data?.filter((service: Service) => {
          const matchedSub = subcategories.find(
            (sub) => sub.name === activeCategory
          );
          return matchedSub && service.sub_category_id === matchedSub.id;
        });

        setServices(filteredServices || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [activeCategory, subcategories]);

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
          <PaintDetailsHeader name={categoryName} status={status} />

          {/* Services */}
          <div className="flex flex-col items-center gap-8 md:gap-10 overflow-hidden">
            <div className="w-full flex flex-col gap-8 md:gap-12">

              <ServicesRow
                subcategories={subcategories}
                totalCount={subcategories.length}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />

              {/* Preview + Card */}
              <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 md:gap-12">

                {/* Car Preview */}
                <div className="w-full lg:flex-1">
                  <CarPreviewSection
                    activeItem={activeItem}
                    activeCategory={activeCategory || categoryName}
                     services={services}

                  />
                </div>

                {/* Protection Card */}
                <div className="w-full lg:max-w-[480px] pr-1 pb-1">
                  <PaintProtectionCard
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    activeCategory={activeCategory || categoryName}
                    services={services} // <-- Pass filtered services here
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
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
import { Loader2 } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoryError, setCategoryError] = useState<string | null>(null);
  const [isFetchingCategory, setIsFetchingCategory] = useState<boolean>(false);

  // Fetch category
  const fetchCategory = async () => {
    setCategoryError(null);
    setIsFetchingCategory(true);
    setSubcategories([]);
    setCategoryName("");
    setActiveCategory("");
    setServices([]);
    try {
      const res = await fetch(`${API_BASE_URL}/categories/${id}`);
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData?.message || "Failed to fetch category");
      }
      const data = await res.json();
      const category = data?.data;
      if (!category) throw new Error("Category not found");

      setCategoryName(category.name);
      setStatus(category.status);
      setSubcategories(category.subcategories || []);
      if (category.subcategories?.length > 0) {
        setActiveCategory(category.subcategories[0].name);
      }
    } catch (error: any) {
      console.error("Category fetch error:", error);
      setCategoryError(error.message || "Something went wrong while fetching category");
    } finally {
      setIsFetchingCategory(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchCategory();
  }, [id]);

  // Fetch services
  const fetchServices = async () => {
    if (!activeCategory || subcategories.length === 0) return;

    setIsLoading(true);
    try {
      const matchedSub = subcategories.find(sub => sub.name === activeCategory);
      if (!matchedSub) {
        setServices([]);
        return;
      }

      const res = await fetch(`${API_BASE_URL}/services?sub_category_id=${matchedSub.id}`);
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData?.message || "Failed to fetch services");
      }
      const data = await res.json();
      setServices(data?.data || []);
    } catch (error: any) {
      console.error("Services fetch error:", error);
      setServices([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [activeCategory, subcategories]);

  const handleRetry = () => {
    fetchCategory();
  };

  // Custom Loading / Error Overlay
  const Overlay = () => (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-start pt-52 px-4">
      {isFetchingCategory ? (
        <div className="bg-neutral-900 border border-gray-700 rounded-xl p-6 w-full max-w-md text-center flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-white" />
          <p className="text-white font-medium text-lg">Fetching category data...</p>
          <p className="text-gray-400 text-sm">Please wait while we load the information.</p>
        </div>
      ) : categoryError ? (
        <div className="bg-red-900/80 border border-red-700 rounded-xl p-6 w-full max-w-md text-center flex flex-col items-center gap-4">
          <p className="text-red-400 font-bold text-lg">Category Not Found</p>
          <p className="text-red-300 text-sm">{categoryError}</p>
          <button
            className="mt-2 px-4 py-2 bg-transparent border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-black transition"
            onClick={handleRetry}
          >
            Retry
          </button>
        </div>
      ) : null}
    </div>
  );

  return (
    <section className="relative overflow-hidden min-h-screen">
      <Navbar />

      {/* Background */}
      <Image
        src="/assets/AllVendorServices/background.png"
        alt="Background"
        fill
        className="object-cover -z-10 bg-[#010304]"
      />

      {/* Overlay */}
      {(isFetchingCategory || categoryError) && <Overlay />}

      {/* Only render main content if category exists AND finished fetching */}
      {!categoryError && !isFetchingCategory && categoryName && (
        <div className="w-full mx-auto px-4 sm:px-6 md:px-30 pb-12 md:pb-20 pt-6 md:pt-10 flex flex-col gap-10 md:gap-14">
          <div className="relative flex flex-col">
            {/* Header */}
            <PaintDetailsHeader name={categoryName} status={status} />

            {/* Services */}
            <div className="flex flex-col items-center gap-8 md:gap-10 overflow-hidden">
              <div className="w-full flex flex-col gap-8 md:gap-12">
                {/* Subcategory Row */}
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
                      isLoading={isLoading}
                    />
                  </div>

                  {/* Protection Card */}
                  <div className="w-full lg:max-w-[480px] pr-1 pb-1">
                    <PaintProtectionCard
                      activeItem={activeItem}
                      setActiveItem={setActiveItem}
                      activeCategory={activeCategory || categoryName}
                      services={services}
                      isLoading={isLoading}
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
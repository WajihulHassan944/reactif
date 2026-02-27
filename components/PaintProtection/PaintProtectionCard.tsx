"use client";

import { useEffect, useState } from "react";
import { Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // shadcn/ui select

interface FieldOption {
  key: string;
  display: string;
}

interface Field {
  id: number;
  label: string;
  input_type: string;
  field_name: string;
  is_required: boolean;
  placeholder?: string;
  options?: FieldOption[];
  default_value?: string | null;
}

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  fields: Field[];
}

interface PaintProtectionCardProps {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
  activeCategory: string | null;
  services?: Service[];
}

export default function PaintProtectionCard({
  activeItem,
  setActiveItem,
  activeCategory,
  services = [],
}: PaintProtectionCardProps) {
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  const currentService = services.find(
    (s) => s.id.toString() === activeItem
  );

  useEffect(() => {
    if (services.length > 0) {
      setActiveItem(services[0].id.toString());
    }
  }, [activeCategory, services]);

  useEffect(() => {
    if (currentService?.fields) {
      const initialValues: Record<string, any> = {};
      currentService.fields.forEach((f) => {
        initialValues[f.field_name] = f.default_value || "";
      });
      setFormValues(initialValues);
    }
  }, [currentService]);

  const handleChange = (fieldName: string, value: any) => {
    setFormValues((prev) => ({ ...prev, [fieldName]: value }));
  };

  const activeBg = "bg-[#F262B5]";
  const summaryBg = "bg-[#F262B5]/10 outline-[#F262B5]/10";

  return (
    <div className="w-full md:w-auto p-5 md:p-6 rounded-3xl outline outline-1 outline-slate-700 flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 w-full md:pl-6">
        <Shield className="w-4 h-4 text-neutral-50" />
        <div className="text-neutral-50 text-base font-bold font-hk">
          {activeCategory}
        </div>
      </div>

      <div className="text-neutral-400 text-sm md:text-base font-medium font-hk w-full md:w-96">
        {currentService?.description || "Select a service to see details."}
      </div>

      {/* Dynamic Fields */}
      <div className="w-full md:w-96 flex flex-col gap-3">
        {currentService?.fields.map((field) => {
          const value = formValues[field.field_name] || "";

          switch (field.input_type) {
            case "text":
            case "email":
            case "tel":
            case "number":
              return (
                <input
                  key={field.id}
                  type={field.input_type}
                  placeholder={field.placeholder}
                  required={field.is_required}
                  value={value}
                  onChange={(e) =>
                    handleChange(field.field_name, e.target.value)
                  }
                  className="w-full h-11 px-4 py-2 rounded-lg outline outline-1 outline-slate-700 text-sm text-neutral-50 bg-black/10 focus:outline-[#F262B5] focus:ring-1 focus:ring-[#F262B5] transition"
                />
              );

            case "file":
              return (
                <input
                  key={field.id}
                  type="file"
                  placeholder={field.placeholder}
                  required={field.is_required}
                  onChange={(e) =>
                    handleChange(field.field_name, e.target.files?.[0] || null)
                  }
                  className="w-full h-11 px-4 py-2 rounded-lg outline outline-1 outline-slate-700 text-sm text-neutral-50 bg-black/10 focus:outline-[#F262B5] focus:ring-1 focus:ring-[#F262B5] transition"
                />
              );

            case "select":
              return (
                <Select
                  key={field.id}
                  onValueChange={(val) => handleChange(field.field_name, val)}
                  value={value}
                >
                  <SelectTrigger className="w-full h-11 rounded-lg text-sm text-neutral-50 bg-black/10 border border-slate-700 focus:border-[#F262B5] focus:ring-1 focus:ring-[#F262B5]">
                    <SelectValue placeholder={field.placeholder || "Select"} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map((opt) => (
                      <SelectItem key={opt.key} value={opt.key}>
                        {opt.display}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );

            case "radio":
              return (
                <div key={field.id} className="flex flex-col gap-2">
                  {field.options?.map((opt) => (
                    <label
                      key={opt.key}
                      className="flex items-center gap-2 cursor-pointer text-sm text-neutral-50"
                    >
                      <input
                        type="radio"
                        name={field.field_name}
                        value={opt.key}
                        checked={value === opt.key}
                        required={field.is_required}
                        onChange={() =>
                          handleChange(field.field_name, opt.key)
                        }
                      />
                      {opt.display}
                    </label>
                  ))}
                </div>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* Summary */}
      <div className={`w-full md:w-96 p-4 rounded-lg outline outline-1 flex flex-col gap-2.5 ${summaryBg}`}>
        <div className="text-xs font-bold font-hk text-[#F262B5]">
          Configuration Summary
        </div>

        <div className="text-neutral-50 text-xs font-bold font-hk">
          {activeCategory} — {currentService?.name || "No selection"}
        </div>

        <Link
          href="/order/address"
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
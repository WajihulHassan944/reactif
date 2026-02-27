"use client";

import { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  isLoading?: boolean; // ✅ NEW
}

export default function PaintProtectionCard({
  activeItem,
  setActiveItem,
  activeCategory,
  services = [],
  isLoading = false,
}: PaintProtectionCardProps) {
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  const currentService = services.find(
    (s) => s.id.toString() === activeItem
  );

  // Auto select first service
  useEffect(() => {
    if (!isLoading && services.length > 0) {
      setActiveItem(services[0].id.toString());
    }
  }, [activeCategory, services, isLoading]);

  // Initialize form fields
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

  return (
    <div className="w-full md:w-auto p-6 md:p-8 rounded-3xl outline outline-1 outline-slate-700 flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-center gap-3">
        <Shield className="w-5 h-5 text-neutral-50" />
        <div className="text-neutral-50 text-lg font-bold font-hk">
          {activeCategory || "Service Details"}
        </div>
      </div>

      {/* 🔥 Loading Skeleton */}
      {isLoading && (
        <div className="flex flex-col gap-4 animate-pulse">
          <div className="h-4 w-2/3 bg-slate-700 rounded" />
          <div className="h-4 w-1/2 bg-slate-700 rounded" />
          <div className="h-12 w-full bg-slate-800 rounded-xl" />
          <div className="h-12 w-full bg-slate-800 rounded-xl" />
          <div className="h-12 w-full bg-slate-800 rounded-xl" />
        </div>
      )}

      {/* Description */}
      {!isLoading && (
        <div className="text-neutral-400 text-sm md:text-base font-medium font-hk leading-relaxed">
          {currentService?.description ||
            "Please select a service to configure your request."}
        </div>
      )}

      {/* No Services */}
      {!isLoading && services.length === 0 && (
        <div className="w-full p-6 rounded-xl bg-neutral-900/40 border border-slate-800 text-center text-neutral-400 text-sm">
          No services available under this category.
        </div>
      )}

      {/* Service Without Fields */}
      {!isLoading &&
        currentService &&
        (!currentService.fields || currentService.fields.length === 0) && (
          <div className="w-full p-6 rounded-xl bg-neutral-900/40 border border-slate-800 text-center text-neutral-400 text-sm">
            This service does not require additional configuration.
          </div>
        )}

      {/* Dynamic Fields */}
      {!isLoading &&
        currentService?.fields &&
        currentService.fields.length > 0 && (
          <div className="w-full flex flex-col gap-5 mt-2">
            {currentService.fields.map((field) => {
              const value = formValues[field.field_name] || "";

              const commonInputClasses =
                "w-full px-4 py-3 rounded-xl outline outline-1 outline-slate-700 text-sm text-neutral-50 bg-black/20 focus:outline-[#F262B5] focus:ring-1 focus:ring-[#F262B5] transition";

              return (
                <div key={field.id} className="flex flex-col gap-2">
                  <label className="text-sm text-neutral-300 font-medium">
                    {field.label}
                    {field.is_required && (
                      <span className="text-[#F262B5] ml-1">*</span>
                    )}
                  </label>

                  {(() => {
                    switch (field.input_type) {
                      case "text":
                      case "email":
                      case "tel":
                      case "number":
                      case "date":
                        return (
                          <input
                            type={field.input_type}
                            placeholder={field.placeholder}
                            required={field.is_required}
                            value={value}
                            onChange={(e) =>
                              handleChange(field.field_name, e.target.value)
                            }
                            className={commonInputClasses}
                          />
                        );

                      case "textarea":
                        return (
                          <textarea
                            placeholder={field.placeholder}
                            required={field.is_required}
                            value={value}
                            rows={4}
                            onChange={(e) =>
                              handleChange(field.field_name, e.target.value)
                            }
                            className={`${commonInputClasses} resize-none`}
                          />
                        );

                      case "file":
                        return (
                          <input
                            type="file"
                            required={field.is_required}
                            onChange={(e) =>
                              handleChange(
                                field.field_name,
                                e.target.files?.[0] || null
                              )
                            }
                            className={`${commonInputClasses} file:mr-3 file:px-3 file:py-1 file:rounded-md file:border-0 file:bg-[#F262B5]/20 file:text-[#F262B5]`}
                          />
                        );

                      case "select":
                        return (
                          <Select
                            onValueChange={(val) =>
                              handleChange(field.field_name, val)
                            }
                            value={value}
                          >
                            <SelectTrigger className="w-full h-12 rounded-xl text-sm text-neutral-50 bg-black/20 border border-slate-700 focus:border-[#F262B5] focus:ring-1 focus:ring-[#F262B5]">
                              <SelectValue
                                placeholder={field.placeholder || "Select"}
                              />
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
                          <div className="flex flex-col gap-3 mt-1">
                            {field.options?.map((opt) => (
                              <label
                                key={opt.key}
                                className="flex items-center gap-3 cursor-pointer text-sm text-neutral-50"
                              >
                                <input
                                  type="radio"
                                  name={field.field_name}
                                  value={opt.key}
                                  checked={value === opt.key}
                                  onChange={() =>
                                    handleChange(field.field_name, opt.key)
                                  }
                                />
                                {opt.display}
                              </label>
                            ))}
                          </div>
                        );

                      case "checkbox":
                        return (
                          <div className="flex flex-col gap-3 mt-1">
                            {field.options?.map((opt) => {
                              const checkedValues: string[] = value || [];
                              return (
                                <label
                                  key={opt.key}
                                  className="flex items-center gap-3 cursor-pointer text-sm text-neutral-50"
                                >
                                  <input
                                    type="checkbox"
                                    value={opt.key}
                                    checked={checkedValues.includes(opt.key)}
                                    onChange={(e) => {
                                      let updated = [...checkedValues];
                                      if (e.target.checked) {
                                        updated.push(opt.key);
                                      } else {
                                        updated = updated.filter(
                                          (v) => v !== opt.key
                                        );
                                      }
                                      handleChange(field.field_name, updated);
                                    }}
                                  />
                                  {opt.display}
                                </label>
                              );
                            })}
                          </div>
                        );

                      default:
                        return (
                          <input
                            type="text"
                            placeholder={field.placeholder}
                            value={value}
                            onChange={(e) =>
                              handleChange(field.field_name, e.target.value)
                            }
                            className={commonInputClasses}
                          />
                        );
                    }
                  })()}
                </div>
              );
            })}
          </div>
        )}
    </div>
  );
}
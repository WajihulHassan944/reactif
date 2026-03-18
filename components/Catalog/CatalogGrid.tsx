import { catalogData } from "@/constants/catalog";
import CatalogCard from "../cards/CatalogCard";
export default function CatalogGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {catalogData.map((item, i) => (
        <CatalogCard key={i} item={item} />
      ))}
    </div>
  );
}
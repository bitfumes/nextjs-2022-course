import { useRouter } from "next/router";
import React, { useEffect } from "react";
import BrandFilterButton from "./BrandFilterButton";

type Props = {
  isSelected: Function;
  selectedBrands: string[];
  setSelectedBrands: Function;
};

const brands = ["Nike", "Addidas"];

export default function FilterSneaker({
  isSelected,
  selectedBrands,
  setSelectedBrands,
}: Props) {
  const { query, push } = useRouter();

  useEffect(() => {
    const queryBrands = query.filter as string;
    if (queryBrands) {
      const filterBrands: string[] = queryBrands.split(",");
      filterBrands.map((_brand) =>
        setSelectedBrands((prev: string[]) => [...prev, _brand])
      );
    }
  }, [query]);

  function filterBy(brand: string) {
    isSelected(brand) ? unSelectBrand(brand) : selectBrand(brand);
  }

  function unSelectBrand(brand: string) {
    const queryBrands = query.filter as string;
    const newQuery = queryBrands
      .split(",")
      .filter((_brand: string) => _brand !== brand)
      .join(",");

    push({ query: newQuery ? { filter: newQuery } : {} });
    setSelectedBrands(selectedBrands.filter((_brand) => _brand !== brand));
  }

  function selectBrand(brand: string) {
    const queryBrands = query.filter as string;
    const newQuery = queryBrands
      ? queryBrands.split(",").concat([brand]).join(",")
      : brand;

    push({ query: { filter: newQuery } });
    setSelectedBrands((prev: string[]) => [...prev, brand]);
  }

  return (
    <div className="p-4 mb-4 border-b text-xs">
      <button className="border rounded-md px-2 py-1">Filter</button>
      <span className="ml-8">
        {brands.map((brand: string) => (
          <BrandFilterButton
            key={brand}
            filterBy={filterBy}
            brand={brand}
            isSelected={isSelected}
          />
        ))}
      </span>
    </div>
  );
}

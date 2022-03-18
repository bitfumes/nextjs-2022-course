import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
  const [show, setShow] = useState(false);

  useEffect(() => {
    const queryBrands = query.filter as string;
    if (queryBrands) {
      // Apply filter from query
      const filterBrands: string[] = queryBrands.split(",");
      filterBrands.map((_brand) =>
        setSelectedBrands((prev: string[]) => [...prev, _brand])
      );

      // Set show filters
      setShow(true);
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

  function showFilters() {
    setShow(!show);
  }

  return (
    <div className="p-4 mb-4 border-b text-xs">
      <button onClick={showFilters} className="border rounded-md px-2 py-1">
        Filters
      </button>

      {show && (
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
      )}
    </div>
  );
}

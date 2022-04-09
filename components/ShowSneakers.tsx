import React, { useEffect, useState } from "react";
import { Sneaker } from "types/sneakers";
import SneakerCard from "./SneakerCard";
import FilterSneaker from "./sneakers/FilterSneaker";

type PropType = {
  sneakers: Sneaker[];
};

export default function ShowSneakers({ sneakers }: PropType) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [filtered, setFiltered] = useState(sneakers);

  useEffect(() => {
    setFiltered(sneakers);
  }, [sneakers]);

  function isSelected(brand: string) {
    brand = brand.toLowerCase();
    return selectedBrands.includes(brand);
  }

  function filterSneakers() {
    let result = sneakers;
    if (selectedBrands.length > 0) {
      result = result.filter((sneaker: Sneaker) => isSelected(sneaker.brand));
    }
    setFiltered(result);
  }

  useEffect(() => {
    filterSneakers();
  }, [selectedBrands]);

  return (
    <>
      <FilterSneaker
        isSelected={isSelected}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      />

      <div className="grid grid-cols-4 gap-4">
        {filtered.map((sneaker) => (
          <SneakerCard key={sneaker._id} sneaker={sneaker} />
        ))}
      </div>
    </>
  );
}

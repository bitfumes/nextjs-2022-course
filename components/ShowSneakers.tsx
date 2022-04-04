import React, { useEffect, useState } from "react";
import { Sneaker } from "types/sneakers";
import SneakerCard from "./SneakerCard";
import FilterSneaker from "./sneakers/FilterSneaker";

type PropType = {
  sneakers: Sneaker[];
  setsneakers: Function;
};

export default function ShowSneakers({ sneakers, setsneakers }: PropType) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  function isSelected(brand: string) {
    return selectedBrands.includes(brand);
  }

  function filterSneakers() {
    // let result = db;
    // if (selectedBrands.length > 0) {
    //   result = db.filter((sneaker: any) => isSelected(sneaker.name));
    // }
    // setsneakers(result);
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
        {sneakers.map((sneaker: any) => (
          <SneakerCard key={sneaker._id} sneaker={sneaker} />
        ))}
      </div>
    </>
  );
}

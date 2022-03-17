import React from "react";

type Props = {
  isSelected: Function;
  selectedBrands: string[];
  setSelectedBrands: Function;
};

export default function FilterSneaker({
  isSelected,
  selectedBrands,
  setSelectedBrands,
}: Props) {
  function filterBy(brand: string) {
    isSelected(brand) ? unSelectBrand(brand) : selectBrand(brand);
  }

  function unSelectBrand(brand: string) {
    setSelectedBrands(selectedBrands.filter((_brand) => _brand !== brand));
  }

  function selectBrand(brand: string) {
    setSelectedBrands([...selectedBrands, brand]);
  }

  return (
    <div className="p-2 text-sm">
      <button className="border rounded-md px-2 py-1">Filter</button>
      <span className="ml-8">
        <button onClick={() => filterBy("Nike")} className="mx-4">
          {isSelected("Nike") && <span className="mr-2">x</span>}
          Nike
        </button>

        <button onClick={() => filterBy("Addidas")} className="mx-4">
          {isSelected("Addidas") && <span className="mr-2">x</span>}
          Addidas
        </button>
      </span>
      {/* <select multiple onChange={filterSneakers}>
    <option value="">All</option>
    <option value="Nike">Nike</option>
    <option value="Addidas">Addidas</option>
  </select> */}
    </div>
  );
}

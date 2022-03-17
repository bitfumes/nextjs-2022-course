export default function BrandFilterButton({
  filterBy,
  brand,
  isSelected,
}: {
  filterBy: Function;
  brand: string;
  isSelected: Function;
}) {
  return (
    <button
      onClick={() => filterBy(brand)}
      className={`
    mx-4 w-20 border rounded-lg px-2 py-1 ${
      !isSelected(brand) ? ` text-gray-400` : " text-blue-800 border-blue-800"
    }
    `}
    >
      {brand}
    </button>
  );
}

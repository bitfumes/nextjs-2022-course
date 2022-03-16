/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import Layout from "../components/Layout";

const allSneakers = [
  {
    name: "Nike",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Addidas",
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Sneakers: NextPage = () => {
  const [sneakers, setsneakers] = useState(allSneakers);

  function filterSneakers(e: ChangeEvent<HTMLSelectElement>) {
    const selectedBrand = e.target.value;

    let result = allSneakers;

    if (selectedBrand) {
      result = allSneakers.filter((sneaker) => sneaker.name === selectedBrand);
    }

    setsneakers(result);
  }

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  function filterBy(brand: string) {
    if (isSelected(brand)) return;
    setSelectedBrands([...selectedBrands, brand]);
  }

  function isSelected(brand: string) {
    return selectedBrands.includes(brand);
  }

  return (
    <Layout>
      <>
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

        <div className="grid grid-cols-4 gap-4">
          {sneakers.map((sneaker) => (
            <div key={sneaker.name} className="text-center">
              <Image
                src={sneaker.image}
                alt={sneaker.name}
                width="200"
                height="200"
                className="rounded-lg shadow-md"
              />
              <p className="font-semibold">{sneaker.name}</p>
            </div>
          ))}
        </div>
      </>
    </Layout>
  );
};

export default Sneakers;

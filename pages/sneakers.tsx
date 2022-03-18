/* eslint-disable @next/next/no-img-element */
import Layout from "components/Layout";
import FilterSneaker from "components/sneakers/FilterSneaker";
import db from "db.json";
import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Sneakers: NextPage = () => {
  const [sneakers, setsneakers] = useState(db);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  console.log(db);

  function isSelected(brand: string) {
    return selectedBrands.includes(brand);
  }

  function filterSneakers() {
    let result = db;

    if (selectedBrands.length > 0) {
      result = db.filter((sneaker) => isSelected(sneaker.name));
    }

    setsneakers(result);
  }

  useEffect(() => {
    filterSneakers();
  }, [selectedBrands]);

  return (
    <Layout>
      <>
        <FilterSneaker
          isSelected={isSelected}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />

        <div className="grid grid-cols-4 gap-4">
          {sneakers.map((sneaker) => (
            <div
              key={sneaker.name}
              className="text-center border rounded-md shadow-sm hover:shadow-md cursor-pointer"
            >
              <Image
                src={sneaker.image.thumbnail}
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

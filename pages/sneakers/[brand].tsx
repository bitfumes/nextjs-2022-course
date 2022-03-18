import db from "db.json";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Brand() {
  const router = useRouter();
  const [sneakers, setSneakers] = useState<any>([]);

  useEffect(() => {
    const filteredDB = db.filter(
      (sneaker) => sneaker.brand.toLocaleLowerCase() === router.query.brand
    );
    setSneakers(filteredDB);
  }, [router.query]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {sneakers.map((sneaker: any) => (
        <div
          key={sneaker.name}
          className="text-center text-gray-400 hover:text-gray-700 border rounded-md shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between p-3"
        >
          <p className="text-right text-sm">$ {sneaker.retailPrice}</p>
          <Image
            src={sneaker.image.thumbnail}
            alt={sneaker.name}
            width="200"
            height="200"
            className="rounded-lg shadow-md"
          />
          <p className="text-sm bottom-0">{sneaker.name}</p>
        </div>
      ))}
    </div>
  );
}

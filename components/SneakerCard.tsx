import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sneaker } from "types/sneakers";

export default function SneakerCard({ sneaker }: { sneaker: Sneaker }) {
  return (
    <Link href={`/sneakers/${sneaker.brand}/${sneaker._id}`}>
      <a className="text-center text-gray-400 hover:text-gray-700 border rounded-md shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between p-3">
        <p className="text-right text-sm">$ {sneaker.retailPrice}</p>
        <Image
          src={sneaker.image.thumbnail}
          alt={sneaker.name}
          width="200"
          height="200"
          className="rounded-lg shadow-md"
        />
        <p className="text-sm bottom-0">{sneaker.name}</p>
      </a>
    </Link>
  );
}

import Layout from "components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Sneaker() {
  const { query } = useRouter();
  const [sneaker, setSneaker] = useState<any>({});

  useEffect(() => {
    if (query.sneaker_id) {
      fetch(`/api/sneakers/${query.sneaker_id}`)
        .then((res) => res.json())
        .then((result) => setSneaker(result));
    }
  }, [query]);

  return (
    <Layout>
      {sneaker?.name && (
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={sneaker?.image?.original}
            width="100%"
            height="100%"
            layout="responsive"
            alt={sneaker.name}
          />
          <div>
            <p className="text-2xl text-gray-600">Brand: {sneaker?.brand}</p>
            <p className="text-3xl mt-4">{sneaker?.name}</p>

            {sneaker?.story && (
              <div className="text-gray-600 my-4">
                <p className="font-semibold">Description:</p>
                <p className="text-gray-500">{sneaker?.story}</p>
              </div>
            )}

            <div className="text-gray-600 my-4 flex">
              <p className="font-semibold">Gender:</p>
              <p className="ml-2">{sneaker.gender}</p>
            </div>

            <div className="flex">
              <p className="text-xl align-middle py-2">
                $ {sneaker?.retailPrice}
              </p>
              <button className="px-2 w-40 py-2 rounded-md shadow bg-indigo-800 text-white ml-4">
                Add to Card
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

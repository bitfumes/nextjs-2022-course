import db from "db.json";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Sneaker() {
  const { query } = useRouter();
  const [sneaker, setSneaker] = useState<any>({});

  useEffect(() => {
    const result = db.find((_sneaker) => _sneaker._id === query.sneaker_id);
    setSneaker(result);
  }, [query]);

  return (
    <div>
      {sneaker?.name && (
        <>
          <p>{sneaker?.name}</p>
          <p>{sneaker?.brand}</p>
          <p>{sneaker?.story}</p>
          <p>{sneaker?.retailPrice}</p>
          <Image
            src={sneaker?.image?.small}
            width="200"
            height="200"
            alt={sneaker.name}
          />
        </>
      )}
    </div>
  );
}

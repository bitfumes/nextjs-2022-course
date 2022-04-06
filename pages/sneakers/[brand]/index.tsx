import Layout from "components/Layout";
import ShowSneakers from "components/ShowSneakers";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Sneaker } from "types/sneakers";

export default function Brand() {
  const { query } = useRouter();
  const [sneakers, setSneakers] = useState<any>([]);

  useEffect(() => {
    if (!query.brand) return;

    fetch(`/api/sneakers?brand=${query.brand}`)
      .then((res) => res.json())
      .then((result: Sneaker[]) => setSneakers(result));
  }, [query]);

  return (
    <Layout>
      <ShowSneakers sneakers={sneakers} setsneakers={setSneakers} />
    </Layout>
  );
}

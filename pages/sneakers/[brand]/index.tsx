import Layout from "components/Layout";
import ShowSneakers from "components/ShowSneakers";
import db from "db.json";
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
    <Layout>
      <ShowSneakers sneakers={sneakers} setsneakers={setSneakers} />
    </Layout>
  );
}

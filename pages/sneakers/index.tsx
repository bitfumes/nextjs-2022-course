/* eslint-disable @next/next/no-img-element */
import Layout from "components/Layout";
import ShowSneakers from "components/ShowSneakers";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Sneaker } from "types/sneakers";

const Sneakers: NextPage = () => {
  const [sneakers, setsneakers] = useState<Sneaker[]>([]);

  useEffect(() => {
    fetch("/api/sneakers")
      .then((res) => res.json())
      .then((result) => setsneakers(result));
  }, []);

  return (
    <Layout>
      <ShowSneakers sneakers={sneakers} setsneakers={setsneakers} />
    </Layout>
  );
};

export default Sneakers;

/* eslint-disable @next/next/no-img-element */
import Layout from "components/Layout";
import ShowSneakers from "components/ShowSneakers";
import db from "db.json";
import { NextPage } from "next";
import React, { useState } from "react";

const Sneakers: NextPage = () => {
  const [sneakers, setsneakers] = useState(db);

  return (
    <Layout>
      <ShowSneakers sneakers={sneakers} setsneakers={setsneakers} />
    </Layout>
  );
};

export default Sneakers;

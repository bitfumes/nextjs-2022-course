/* eslint-disable @next/next/no-img-element */
import Layout from "components/Layout";
import ShowSneakers from "components/ShowSneakers";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Sneaker } from "types/sneakers";

const Sneakers: NextPage<{ sneakers: Sneaker[] }> = ({ sneakers }) => {
  return (
    <Layout>
      <ShowSneakers sneakers={sneakers} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch("http://localhost:3000/api/sneakers");
  const results = await data.json();

  return {
    props: { sneakers: results },
  };
};

export default Sneakers;

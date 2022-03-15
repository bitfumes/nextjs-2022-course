/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";

const sneakers = [
  {
    name: "Nike",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Addidas",
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Sneakers: NextPage = () => {
  return (
    <Layout>
      <>
        <div>
          <select name="" id="">
            <option value="">All</option>
            <option value="">Nike</option>
            <option value="">Addidas</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {sneakers.map((sneaker) => (
            <div key={sneaker.name} className="text-center">
              <Image
                src={sneaker.image}
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

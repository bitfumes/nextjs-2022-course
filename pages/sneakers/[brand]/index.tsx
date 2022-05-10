import Layout from "components/Layout";
import ShowSneakers from "components/ShowSneakers";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Sneaker } from "types/sneakers";

export default function Brand({ sneakers }: { sneakers: Sneaker[] }) {
  const { query } = useRouter();
  // const [sneakers, setSneakers] = useState<any>([]);

  // useEffect(() => {
  //   if (!query.brand) return;

  //   fetch(`/api/sneakers?brand=${query.brand}`)
  //     .then((res) => res.json())
  //     .then((result: Sneaker[]) => setSneakers(result));
  // }, [query]);

  return (
    <Layout>
      <ShowSneakers sneakers={sneakers} />
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const data = await fetch(
    `${process.env.APP_URL}/api/sneakers?brand=${context.query.brand}`
  );
  const sneakers = await data.json();
  return { props: { sneakers } };
}

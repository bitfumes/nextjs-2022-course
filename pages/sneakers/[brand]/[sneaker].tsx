import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Sneaker() {
  const { query } = useRouter();

  useEffect(() => {
    console.log(query.sneaker);
  }, [query]);

  return <div>sneaker</div>;
}

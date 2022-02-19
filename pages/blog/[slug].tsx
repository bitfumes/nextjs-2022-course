import { useRouter } from "next/router";
import React from "react";

export default function Post() {
  const { query } = useRouter();

  return <div>{query.slug}</div>;
}

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <Link href="/">
        <a className="mx-2 underline">Home</a>
      </Link>
      <Link href="/about">
        <a className="mx-2 underline">About</a>
      </Link>
      <Link href="/contact">
        <a className="mx-2 underline">Contact</a>
      </Link>
    </>
  );
}

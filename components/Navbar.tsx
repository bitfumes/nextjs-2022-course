import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-stone-700 text-white p-4">
      <Link href="/">
        <a className="mx-2 hover:underline">Home</a>
      </Link>
      <Link href="/sneakers">
        <a className="mx-2 hover:underline">Sneakers</a>
      </Link>
      <Link href="/about">
        <a className="mx-2 hover:underline">About</a>
      </Link>
      <Link href="/contact">
        <a className="mx-2 hover:underline">Contact</a>
      </Link>
    </div>
  );
}

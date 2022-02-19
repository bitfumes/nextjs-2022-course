import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <div>About</div>
    </nav>
  );
}

import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <nav>
      <Navbar />
      <div className="p-2">{children}</div>
    </nav>
  );
}

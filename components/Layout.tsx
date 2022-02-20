import React, { ReactElement } from "react";
import Navbar from "./Navbar";

interface PropsType {
  children: ReactElement;
}

export default function Layout({ children }: PropsType) {
  return (
    <nav>
      <Navbar />
      <div className="p-2">{children}</div>
    </nav>
  );
}

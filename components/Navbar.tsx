import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="bg-purple-900 text-white p-4">
      <Link href="/">
        <a className="mx-2 hover:underline">Home</a>
      </Link>
      <Link href="/sneakers">
        <a className="mx-2 hover:underline">Sneakers</a>
      </Link>
      {session && (
        <div className="flex float-right ">
          <h1 className="mr-4">Welcome, {user?.name}</h1>
          <button
            onClick={() => signOut()}
            className="mx-2 cursor-pointer hover:underline"
          >
            Logout
          </button>
        </div>
      )}

      {!session && (
        <Link href="/login">
          <a className="mx-2 float-right hover:underline">Login</a>
        </Link>
      )}
    </div>
  );
}

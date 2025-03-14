import Link from "next/link";
import React from "react";
import { auth } from "@/auth";
import Logout from "./Logout";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth()
  return (
    <nav className="border-b bg-background w-10/12 mx-auto flex items-center">
      <div className="flex w-full items-center justify-between my-4 ">
        <Link className="font-bold" href="/">Andrei TAZLAUANU</Link>
        <div className="flex items-center gap-x-5">
          <Link href="/middleware">Middleware</Link>
          <Link href="/server">Server</Link>
        </div>
        <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <Link href="/sign-in">
              <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">Login</div>
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name}
                {session?.user?.image && (
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    alt="User Avatar"
                    src={session?.user?.image || ""}
                  />
                )}
              </div>
              <Logout />
            </>
          )}

        </div>
      </div>
    </nav>
  )
}

export default Navbar
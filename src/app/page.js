"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Home = () => {
  const { status, data: session } = useSession();
  const isAdmin = true;
  return (
    <>
      <div className="absolute right-0 top-0 flex gap-x-4 p-4 items-center">
        <Image width={50} height={50} alt="profilePic" className="rounded-full" src={session?.user?.image || "/noavatar.png"} />
        {status === "authenticated" ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn("google")}>Sign In</Button>
        )}
        {isAdmin && (
          <Link href={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
        )}
      </div>
      <div className="flex h-screen items-center justify-center">
        <h1 className="font-bold text-5xl">
          Hi, {session?.user?.name || "User"}
        </h1>
      </div>
    </>
  );
};

export default Home;

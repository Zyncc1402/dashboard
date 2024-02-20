"use client";

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'

const UserCard = () => {
    const { data: session } = useSession();
  return (
    <>
      <Image
        src={session?.user?.image || "/noavatar.png"}
        alt="avatar"
        width="50"
        height="50"
        className="rounded-full"
      />
      <div className="info">
        <h2 className="font-bold">{session?.user?.name || "User"}</h2>
        <p className="font-light role">Administrator</p>
      </div>
    </>
  );
}

export default UserCard
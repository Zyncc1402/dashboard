"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import { Button } from '../ui/button';

const SigninButton = () => {
    const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => signIn("google")}>Sign In</Button>
      )}
    </div>
  );
}

export default SigninButton
"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h2 className="font-bold text-5xl">Something went wrong!</h2>
      <div>
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
        <Button
          className="m-6"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}

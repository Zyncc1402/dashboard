import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src={"/loader.svg"} width={200} height={200} alt="loader" />
    </div>
  );
};

export default loading;

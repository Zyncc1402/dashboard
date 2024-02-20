import Image from 'next/image';
import React from 'react'

const LoaderSVG = () => {
  return (
    <div className="flex items-center justify-center h-100%">
      <Image src={"/loader.svg"} width={200} height={200} alt="loader" />
    </div>
  );
}

export default LoaderSVG
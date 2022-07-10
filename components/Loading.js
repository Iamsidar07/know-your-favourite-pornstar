import React from "react";
import Image from 'next/image'
const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-[100px] h-[100px] ">
        <Image src={"/img/loading.gif"} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Loading;

import React from "react";
import Certi from "../assets/Layer 2.png";

const Page6 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4 sm:px-6 md:px-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        Earn Brag-Worthy Certificates to Showcase Your Credibility
      </h1>
      <img
        src={Certi}
        alt="Certificate"
        className="w-full max-w-[700px] rounded-2xl h-auto object-contain"
      />
    </div>
  );
};

export default Page6;

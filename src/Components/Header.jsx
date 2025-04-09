import React from "react";
import Logo from "../Images/Logo";

const Header = () => {
  return (
    <div className="">
      <div
        className=" bg-[#0c110e] flex items-center justify-around py-[16px] "
      >
        <div className="left flex items-center gap-2">
            <Logo/>
          <h1
            className="text-[#95CD4D] capitalize font-semibold text-xl"
          >
            progace
          </h1>
        </div>

        <div className="right flex gap-4">
          
        <button className="py-2 px-4 border-2 border-[#95CD4D] text-[#95CD4D] rounded-lg  font-semibold">Sign-in</button>
        <button className="bg-[#95CD4D] py-2 px-4 rounded-lg font-semibold  text-[#2b3320]">Sign-up</button>

        </div>
      </div>
    </div>
  );
};

export default Header;

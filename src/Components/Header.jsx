import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Logo from "../Images/Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#0c110e] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
   
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="text-[#95CD4D] font-semibold text-xl capitalize">
            progace
          </h1>
        </div>

        <div className="hidden sm:flex gap-4">
          <button className="py-2 px-4 border-2 border-[#95CD4D] text-[#95CD4D] rounded-lg font-semibold">
            Sign-in
          </button>
          <button className="bg-[#95CD4D] py-2 px-4 rounded-lg font-semibold text-[#2b3320]">
            Sign-up
          </button>
        </div>

     
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <X size={28} className="text-[#95CD4D]" />
            ) : (
              <Menu size={28} className="text-[#95CD4D]" />
            )}
          </button>
        </div>
      </div>

   
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-2 px-4 pb-4">
          <button className="py-2 px-4 border-2 border-[#95CD4D] text-[#95CD4D] rounded-lg font-semibold w-full">
            Sign-in
          </button>
          <button className="bg-[#95CD4D] py-2 px-4 rounded-lg font-semibold text-[#2b3320] w-full">
            Sign-up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

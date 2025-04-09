
import React from "react";
import DotOne from "../Images/DotOne";
import DotTwo from "../Images/DotTwo";
import { MdOutlineContentPaste } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import TopImg from "../Images/TopImg";
import Button from "../Components/Button";

const CustomButton = ({ icon: Icon, text }) => {
  return (
    <div className="custom-border flex items-center gap-2 py-4 px-6 rounded-2xl bg-[#5E8F5E2E]">
      <Icon className="text-xl text-[#FFCA3E]" />
      <p className="capitalize text-white font-semibold text-base text-nowrap">{text}</p>
    </div>
  );
};

const Page1 = () => {
  return (
    <div className="md:max-w-full overflow-hidden">
      <div className="bg-[#163419] flex flex-col md:flex-row">
        
        <div className="hidden md:block">
          <DotOne/>
        </div>
  
        <div className="md:inline hidden">
       
          <DotTwo />
        </div>

        <div className="main flex flex-col md:flex-row items-center justify-center w-full md:w-fit px-4 md:px-0 py-10 md:py-0">
      
          <div className="flex flex-col gap-10 md:mr-10">
            <div className="text-white w-full md:px-5">
              <h1 className="font-bold md:text-5xl text-3xl capitalize my-4 text-center md:text-left">
                ignite your mind, win big
              </h1>
              <p className="font-normal md:text-xl text-sm my-6 md:tracking-normal text-center md:text-left py-2 px-5">
                Are you ready to put your brain to the ultimate test? <br />
                ProgAce Quiz is your chance to challenge your cognitive
                abilities, sharpen your problem-solving skills, and win exciting
                rewards.
              </p>
              <div className="flex justify-center md:justify-start mx-3">
                <Button Icon={MdOutlineContentPaste} title={" take a sample test"} />
              </div>
            </div>

       
            <div className="left-part-2">
              <h2 className="text-xl capitalize text-[#ECFFD2] p-2 text-center md:text-left">
                what you get?
              </h2>
              <div className="icons flex flex-wrap gap-3 justify-center md:justify-start mt-2">
                <CustomButton icon={FaGift} text={"win rewards"} />
                <CustomButton icon={RiLightbulbFlashFill} text={"test analysis"} />
                <CustomButton icon={FaBook} text={"solution key"} />
                <CustomButton icon={MdContactPhone} text={"certificate"} />
              </div>
            </div>
          </div>

          <div className="md:inline hidden mt-6 md:mt-0">
            <TopImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;



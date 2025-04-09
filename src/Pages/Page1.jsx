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
    <div className="w-full">
      <div className="bg-[#163419] flex">
        <DotOne />
        <DotTwo />

        <div className="main flex items-center justify-center">
          <div className="flex flex-col gap-10">
            <div className="text-white px-5">
              <h1 className="font-bold text-5xl capitalize my-4">
                ignite your mind, win big
              </h1>
              <p
                className="
                          font-normal text-xl my-6 tracking-normal"
              >
                Are you ready to put your brain to the ultimate test? <br />
                ProgAce Quiz is your chance to challenge your cognitive
                abilities, sharpen your problem-solving skills, and win exciting
                rewards.
              </p>
              <Button Icon={MdOutlineContentPaste} title={" take a sample test"}/>
            </div>
            <div className="left-part-2">
              <h2 className="text-xl capitalize text-[#ECFFD2] p-2">
                what you get?
              </h2>
              <div className="icons flex gap-2 mt-2">
                <CustomButton icon={FaGift} text={"win rewards"} />
                <CustomButton
                  icon={RiLightbulbFlashFill}
                  text={"test analysis"}
                />
                <CustomButton icon={FaBook} text={"solution key"} />
                <CustomButton icon={MdContactPhone} text={"certificate"} />
              </div>
            </div>
          </div>

          <div className="">
            <TopImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;

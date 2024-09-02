import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import Button from "./Button";

const ExperienceCom = () => {
  return (
    <div className="col-span-1 flex flex-col justify-center w-full  lg:w-[50%] mt-[16%] lg:mt-0">
      <div className="flex items-center">
        <div className=" w-full flex flex-col justify-center ml-6">
          <span className="border border-white p-5 flex flex-col justify-center items-center rounded-md">
            <p className="mb-0 p-2">jan2023-Apr-2024</p>
            <span className="flex items-center gap-x-5">
              <BsPersonWorkspace size={28} />
              <span className="flex flex-col items-center">
                <p className="text-[18px] font-medium">Frontend Developer</p>
                <p className="text-[18px] font-medium">J2D2 Limited</p>
              </span>
            </span>
          </span>
        </div>
        <Button
          varient="text-center text-white font-semibold lg:font-semibold  uppercase tracking-[0.2rem] text-blue-500 text-[18px] md:text-[18px] lg:text-[18px] mb-[5%] lg:mb-0  rotate-90 bg- bg-blue-500 rounded-lg h-[50px] p-1 lg:tracking-[0.2rem]    mt-[20px] lg:mt-0      text-[16px] tracking-[0.1rem] "
          id="EXPERIENCE"
          title="EXPERIENCE"
        />
      </div>
    </div>
  );
};

export default ExperienceCom;

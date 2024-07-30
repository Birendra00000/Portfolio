import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-gray-100 mt-4">
      <div
        className="w-[90%] flex flex-col sm:flex-row justify-center gap-5 items-center   h-fit 
      sm:h-[100px] md:h-[100px] lg:h-[100px] p-2"
      >
        <div className="w-full flex flex-col   items-center">
          <span
            className="flex items-center w-full justify-center sm:justify-start
        md:justify-start lg:justify-start sm:ju gap-1 text-gray-600 
          text-[11px] sm:text-[12px] md:text-[13px] lg:text-[16px]  h-full"
          >
            <MdEmail />
            <p className="mb-0 font-semibold">
              Email:birendrabhusal555@gmail.com
            </p>
          </span>
          <span className="flex items-center gap-1 text-gray-600 w-full  text-[11px] sm:text-[12px] md:text-[13px] lg:text-[16px] justify-center sm:justify-start  md:justify-start lg:justify-start">
            <IoCallSharp />
            <p className="mb-0 font-semibold"> Contact:9845864517</p>
          </span>
        </div>
        <div className="flex gap-4 justify-center sm:justify-center md:justify-center lg:justify-center  items-center ">
          <Image
            src={"/assests/facebook.png"}
            alt="icon--img"
            width={24}
            height={24}
            className="w-6 h-6"
          />{" "}
          <Image
            src={"/assests/linkedin.png"}
            alt="icon--img"
            width={24}
            height={24}
            className="w-6 h-6"
          />{" "}
          <Image
            src={"/assests/github1.png"}
            alt="icon--img"
            width={24}
            height={24}
            className="w-6 h-6"
          />{" "}
        </div>
        <div
          className="flex flex-col   text-[11px] sm:text-[12px] md:text-[13px] lg:text-[16px]  sm:w-[100%] md:w-[100%] lg:w-[100%] justify-center sm:justify-end
        md:justify-end lg:justify-end "
        >
          <span className="flex  justify-center sm:justify-end md:justify-end lg:justify-end">
            Copyright © 2024 Birendra Bhusal.
          </span>
          <span className="flex  justify-center sm:justify-end md:justify-end lg:justify-end">
            {" "}
            All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-gray-100">
      <div className="w-[90%] flex justify-between h-[100px] items-center">
        <div>
          <span className="flex items-center gap-1 text-gray-600">
            <MdEmail />
            <p className="mb-0 font-semibold">
              Email:birendrabhusal555@gmail.com
            </p>
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <IoCallSharp />
            <p className="mb-0 font-semibold"> Contact:9845864517</p>
          </span>
        </div>
        <div className="flex gap-4">
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
        <div className="flex flex-col">
          <span>Copyright © 2024 Birendra Bhusal.</span> All Rights Reserved.
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

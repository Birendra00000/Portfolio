"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Button from "./reausable/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* <section
        className="w-full padding-2 flex flex-col md:flex-row mb-[25%] items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row h-[300px] sm:h-[300px] relative lg:mb-[25%]"
        id="home"
      >
        <div className="absolute top-[20%] sm:top-[20%] lg:top-[30%] w-[85%] flex justify-between items-center flex-col md:flex-row lg:flex-row ">
          <div className="h-full">
            <h4 className="bold-20 text-white text-xl">Hello,</h4>
            <h1 className="bold-48 lg:bold-64 text-[24px] lg:text-[36px] text-[#EEFBFB] ">
              This is Birendra Bhusal
            </h1>
            <span className="flex items-center gap-3">
              <h2 className="font-semibold lg:font-bold text-[18px] lg:text-[32px] capitalize text-white">
                I'm a{" "}
              </h2>
              <span className="font-semibold lg:font-bold text-[18px] lg:text-[32px] capitalize text-[#007CC7]">
                <Typewriter
                  options={{
                    strings: ["MernStack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
            <div className="flex gap-4 justify-start sm:justify-start md:justify-start lg:justify-start  items-start ">
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/assests/facebook.png"}
                  alt="icon--img"
                  width={24}
                  height={24}
                  className="w-6 h-6 "
                />{" "}
              </span>
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/assests/linkedin.png"}
                  alt="icon--img"
                  width={24}
                  height={24}
                  className="w-6 h-6 bg-white rounded-full"
                />{" "}
              </span>{" "}
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/assests/github1.png"}
                  alt="icon--img"
                  width={24}
                  height={24}
                  className="w-6 h-6 bg-white rounded-full"
                />{" "}
              </span>
            </div>
            <span className=" flex items-center gap-2 pt-6">
              <a href="https://app.sajilocv.com/cv/d44a0035-2fdd-40ce-abb5-015ccf25fb3d">
                <Button
                  title={"Download CV"}
                  type="button"
                  icon="/assests/download.png"
                  varient="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  border border-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  p-2  text-white   shadow-md  text-[12px] lg:text-[16px] font-semibold"
                />{" "}
              </a>
              <Button
                title={"Contact"}
                type="button"
                icon="/assests/rightarrow.png"
                varient=" text-white bg-[#0D1224]   shadow-md p-2  text-[12px] lg:text-[16px] font-semibold border border-white"
              />
            </span>
          </div>
          <div>
            {" "}
            <div>
              <Image
                src={"/assests/myphoto.png"}
                width={250}
                height={250}
                quality={100}
                alt="my-photo"
              />
            </div>
          </div>
        </div>
      </section> */}

      <div className="w-full flex justify-center mt-[6%] " id="HOME">
        <div className="w-[80%] flex flex-col sm:flex-row md:flex-row items-center  justify-between">
          {" "}
          <div className="h-full">
            <h4 className="bold-20 text-white text-xl">Hello,</h4>
            <h1 className="bold-48 lg:bold-64 text-[24px] lg:text-[36px] text-[#EEFBFB] ">
              This is Birendra Bhusal
            </h1>
            <span className="flex items-center gap-3">
              <h2 className="font-semibold lg:font-bold text-[18px] lg:text-[32px] capitalize text-white">
                I'm a{" "}
              </h2>
              <span className="font-semibold lg:font-bold text-[18px] lg:text-[32px] capitalize text-[#007CC7]">
                <Typewriter
                  options={{
                    strings: ["MernStack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
            <div className="flex gap-4 justify-start sm:justify-start md:justify-start lg:justify-start  items-start my-4">
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <a href="https://github.com/Birendra00000">
                  <Image
                    src={"/assests/facebook.png"}
                    alt="icon--img"
                    width={24}
                    height={24}
                    className="w-6 h-6 "
                  />{" "}
                </a>
              </span>
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <a href="https://www.linkedin.com/in/birendra-bhusal-814772262/">
                  <Image
                    src={"/assests/linkedin.png"}
                    alt="icon--img"
                    width={24}
                    height={24}
                    className="w-6 h-6 bg-white rounded-full"
                  />{" "}
                </a>
              </span>{" "}
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/assests/github1.png"}
                  alt="icon--img"
                  width={24}
                  height={24}
                  className="w-6 h-6 bg-white rounded-full"
                />{" "}
              </span>
            </div>
            <span className=" flex items-center gap-2 pt-6">
              <a href="https://app.sajilocv.com/cv/d44a0035-2fdd-40ce-abb5-015ccf25fb3d">
                <Button
                  title={"Download CV"}
                  type="button"
                  icon="/assests/download.png"
                  varient="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  border border-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  p-2  text-white   shadow-md  text-[12px] lg:text-[16px] font-semibold rounded-full"
                />{" "}
              </a>
              <Button
                title={"Contact"}
                type="button"
                icon="/assests/rightarrow.png"
                varient=" text-white bg-[#0D1224]   shadow-md p-2  text-[12px] lg:text-[16px] font-semibold border border-white rounded-full"
                id="CONTACT"
              />
            </span>
          </div>{" "}
          <div>
            <Image
              src={"/assests/myphoto.png"}
              width={250}
              height={250}
              quality={100}
              alt="my-photo"
              className="md:w-[180px] lg:w-[220px] w-[200px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

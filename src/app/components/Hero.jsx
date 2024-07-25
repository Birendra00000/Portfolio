"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Button from "./reausable/Button";
import Image from "next/image";
const Hero = () => {
  return (
    // <section className="w-full padding-4 flex flex-col items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row">
    //   <span className=" absolute   h-[144px] w-[80%] blur-[7rem] -z-10">
    //     <div className="relative z-20 flex flex-1 flex-col pt-16">
    //       <h4 className="bold-20">Hello,</h4>
    //       <h1 className="bold-48">I'm Birendra Bhusal</h1>
    //       <h2 className="bold-28 lg:bold-32 text-[1.8rem] capitalize">A</h2>
    //     </div>
    //     <div>Image</div>
    //   </span>
    // </section>
    <>
      <section className="w-full padding-2 flex flex-col items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row h-[300px] relative lg:mb-[10%]">
        <div className="absolute top-[20%] lg:top-[30%] w-[85%] flex justify-between items-center flex-col lg:flex-row ">
          <div className="h-full">
            <h4 className="bold-20">Hello,</h4>
            <h1 className="bold-48 lg:bold-64 text-[26px] lg:text-[36px] text-blue-500">
              I'm Birendra Bhusal
            </h1>
            <span className="flex items-center gap-3">
              <h2 className="font-semibold lg:font-bold text-[26px] lg:text-[32px] capitalize text-black">
                A
              </h2>
              <span className="font-semibold lg:font-bold text-[22px] lg:text-[32px] capitalize text-black">
                <Typewriter
                  options={{
                    strings: ["MernStack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
            <span className=" flex items-center gap-2 pt-6">
              <Button
                title={"Download CV"}
                type="button"
                icon="/assests/download.png"
                varient="bg-white text-black   shadow-md shadow-blue-500 text-[12px] lg:text-[16px]"
              />{" "}
              <Button
                title={"Contact"}
                type="button"
                icon="/assests/rightarrow.png"
                varient="bg-white text-blue-500   shadow-md shadow-blue-500 text-[12px] lg:text-[16px]"
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
      </section>
    </>
  );
};

export default Hero;

import * as React from "react";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Skillsdata } from "../Data";
import { skillsImage } from "../../../utils/SkillImage";
export default function Skills() {
  return (
    <>
      <div
        id="SKILLS"
        className=" w-full flex justify-center mt-[16%] lg:mt-[6%]"
      >
        <div className="relative z-50 border-t  border-[#111013] w-[85%]">
          <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
            </div>
          </div>

          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex  items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span
                className="text-center text-white font-semibold lg:font-semibold  uppercase lg:tracking-[0.2rem]   md:text-[18px] lg:text-[18px] mb-[5%] lg:mb-0   bg- bg-blue-500 rounded-lg h-[50px] flex items-center p-1
               text-[16px] tracking-[0.1rem]"
              >
                Skills
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>

          <div className="w-full my-12">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {Skillsdata &&
                Skillsdata.map((skill) => (
                  <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
                    <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                      <div className="flex -translate-y-[1px] justify-center">
                        <div className="w-3/4">
                          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-3 p-6">
                        <div className="h-8 sm:h-10">
                          <Image
                            src={skillsImage(skill)?.src}
                            alt={skill}
                            width={40}
                            height={40}
                            className="h-full w-auto rounded-lg"
                          />
                        </div>
                        <p className="text-white text-sm sm:text-[16px]">
                          {skill}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}

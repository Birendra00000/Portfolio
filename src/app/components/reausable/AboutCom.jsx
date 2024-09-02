import React from "react";
import Button from "./Button";

const AboutCom = () => {
  return (
    <div className=" flex justify-center items-center  font-normal w-full lg:w-[50%] lg:border-r lg:border-white sm:w-full  ">
      <div className="flex items-center flex-col  lg:flex-row ">
        <Button
          varient="text-center text-white font-semibold lg:font-semibold  uppercase lg:tracking-[0.2rem] 
          text-[16px] tracking-[0.1rem] text-blue-500  md:text-[18px] lg:text-[18px] mb-[5%] lg:mb-0  lg:rotate-90 bg- bg-blue-500 rounded-lg h-[50px] p-1 "
          id="ABOUT"
          title="ABOUT"
        />
        <span className="flex flex-col gap-2 w-full items-start mr-6">
          {" "}
          <p className="font-medium text-blue-300 text-[18px]">Who I am?</p>
          <p>
            My name is BIRENDRA BHUSAL. I am a professional and enthusiastic
            programmer in my daily life. I am a quick learner with a
            self-learning attitude. I love to learn and explore new technologies
            and am passionate about problem-solving. I love almost all the
            stacks of web application development and love to make the web more
            open to the world. My core skill is based on JavaScript and I love
            to do most of the things using JavaScript. I am available for any
            kind of job opportunity that suits my skills and interests.
          </p>
        </span>
      </div>
    </div>
  );
};

export default AboutCom;

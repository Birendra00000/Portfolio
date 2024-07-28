import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <section className="w-full padding-2 flex flex-col items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row lg:h-[300px] md:h-[300px] lg:mt-0 md:mt-0 mt-[60%]">
      <div className="w-[85%]  flex justify-center flex-col">
        <span className="text-center font-semibold lg:font-bold  uppercase tracking-[0.3rem] text-blue-500 text-[20px] md:text-[22px] lg:text-[25px] mb-[3%]">
          About
        </span>
        <div className="grid md:grid-cols-2 gap-2 lg:gap-[80px] md:gap-4 lg:grid-rows-2 items-end">
          <span className="md:col-span-1 lg:col-span-1 ">
            <p className="font-semibold text-[14px] md:font-bold lg:font-bold text-blue-300 ">
              I am a highly skilled MERN stack developer passionate about
              creating visually appealing and user-friendly web applications.
              Proficient in HTML, CSS, JavaScript, and backend technologies like
              Node.js and Express.js, I specialize in crafting seamless
              interfaces that ensure responsive design across all devices. With
              extensive experience in frontend frameworks such as React and
              Next.js, I merge technical proficiency with a keen eye for design
              to deliver exceptional user experiences. As a collaborative
              problem-solver, I am dedicated to writing clean, efficient code
              and staying abreast of the latest industry trends.
            </p>
          </span>
          <span className="md:col-span-1 lg:col-span-1 flex justify-center md:justify-end lg:justify-end items-start">
            <Image
              src={"/assests/myphoto.png"}
              width={200}
              height={210}
              quality={100}
              alt="my-photo"
              className="lg:w-[250px] lg:h-[250px]"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;

import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <section className="w-full padding-2 flex flex-col items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row h-[300px] top-[45px] relative">
      <div className="w-[85%]  flex justify-center flex-col">
        <span className="text-center font-semibold lg:font-bold  uppercase tracking-[0.3rem] text-blue-500 text-[25px] mb-[3%]">
          About
        </span>
        <div className="grid grid-cols-2 gap-20 md:gap-28 lg:grid-row-2 items-end">
          <span className="col-span-1 ">
            <p className="font-bold text-blue-300 ">
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
          <span className="col-span-1 flex justify-center items-start">
            <Image
              src={"/assests/myphoto.png"}
              width={200}
              height={210}
              quality={100}
              alt="my-photo"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;

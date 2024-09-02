import React from "react";
import AboutCom from "./reausable/AboutCom";
import ExperienceCom from "./reausable/ExperienceCom";
const About = () => {
  return (
    <section
      className="w-full padding-2 flex flex-col items-center justify-center lg:flex-row mt-[12%] lg:mt-[5%] "
      id="ABOUT"
    >
      <div className="w-[85%] flex items-center " id="EXPERIENCE">
        <div className="flex flex-col   lg:flex-row  text-white w-full">
          <AboutCom />
          <ExperienceCom />
        </div>
      </div>
    </section>
  );
};

export default About;

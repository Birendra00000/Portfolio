import React from "react";
import { portfolio } from "../Data";
import Button from "./reausable/Button";
const Portfolio = () => {
  return (
    <div
      className="w-full gap:20 md:gap-28 xl:flex-row flex flex-col justify-center sm:mt-[5%] items-center"
      id="PORTFOLIO"
    >
      <div className="w-full lg:w-[95%]  flex justify-center flex-col md:flex-col lg:flex-col items-center">
        <div className="flex w-full justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>
        <div className="flex justify-center my-5  lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span
              className="text-center text-white font-semibold lg:font-semibold  uppercase
             md:text-[18px] lg:text-[18px] lg:tracking-[0.2rem] text-[16px] tracking-[0.1rem]  lg:mb-0   bg- bg-blue-500 rounded-lg h-[50px] p-1 flex items-center"
            >
              Portfolio
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
        <ul className="mt-12 grid gap-[5%] sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 w-full  justify-center md:justify-center sm:justify-center">
          {portfolio.map((item) => (
            <PortfolioData
              key={item.title}
              title={item.title}
              ImgUrl={item.ImgUrl}
              description={item.description}
              link={item.link}
              github={item.github}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;

const PortfolioData = ({ title, ImgUrl, description, link, github }) => {
  return (
    <li
      className="relative flex  justify-center flex-1 
    "
    >
      <div
        className=" w-[300px] rounded-2xl border overflow-hidden group   flex flex-col min-h-fit
    transition duration-500 ease-in  transform hover:-translate-y-1 hover:scale-110 bg-[#1b203e]"
      >
        <div
          className="bg-cover bg-center h-[170px] bg-no-repeat w-full
           overflow-visible"
          style={{ backgroundImage: `url(${ImgUrl})` }}
        ></div>
        <div className="px-6 pb-3 text-white min-h-fit">
          <h3 className="bold-18 lg:bold-20 my-2 capitalize font-semibold text-[15px] lg:text-[18px] ">
            {title}
          </h3>
          <p className="regular-14 text-[10px] lg:text-[13px] text-gray-20 mb-1">
            {description}
          </p>
        </div>
        <span className="flex justify-between  gap-3 pb-3 px-2">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button
              type="button"
              title="View"
              icon="/assests/view2.png"
              varient="bg-white text-dark rounded-lg text-[12px] lg:text-[14px] font-medium shadow-xl w-[115px] px-2 py-2"
            />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button
              type="button"
              title="github code"
              icon="/assests/github.png"
              varient="bg-black text-white rounded-lg text-[12px] lg:text-[14px] font-medium shadow-xl w-[115px] px-2 py-2"
            />
          </a>
        </span>{" "}
      </div>
    </li>
  );
};

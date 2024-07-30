import React from "react";
import { portfolio } from "../Data";
import Button from "./reausable/Button";
import Image from "next/image";
const Portfolio = () => {
  return (
    <div
      className="w-full gap:20 py-10 pb-[180px] md:pb-32 lg:pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#f7f7f7] flex flex-col justify-center"
      id="portfolio"
    >
      <div className="w-[95%]  flex justify-center flex-col md:flex-col lg:flex-col">
        <span className="text-center font-semibold lg:font-bold  uppercase tracking-[0.3rem] text-blue-500 text-[20px] md:text-[22px] lg:text-[25px] mb-[3%]">
          Portfolio
        </span>
        <ul className="mt-12 grid gap-[3%] sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 w-full  justify-center">
          {portfolio.map((item) => (
            <PortfolioData
              key={item.title}
              title={item.title}
              ImgUrl={item.ImgUrl}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;

const PortfolioData = ({ title, ImgUrl, description }) => {
  return (
    <li
      className="relative flex flex-1 flex-col rounded-2xl border overflow-hidden group w-[300px] h-[390px] md:[420px] lg:h-[410px]
    transition duration-500 ease-in  transform hover:-translate-y-1 hover:scale-110 

    "
    >
      <div>
        <div
          className="bg-cover bg-center h-[170px] bg-no-repeat w-full
           overflow-visible"
          style={{ backgroundImage: `url(${ImgUrl})` }}
        ></div>
        {/* <Image src={ImgUrl} alt="img" width={300} height={300} quality={100} /> */}
      </div>
      <div className="px-6 py-3">
        <h3 className="bold-18 lg:bold-20 my-2 capitalize font-semibold text-[15px] lg:text-[18px] ">
          {title}
        </h3>
        <p className="regular-14 text-[12px] lg:text-[14px] text-gray-20 mb-1">
          {description}
        </p>
      </div>
      <span className="flex justify-between px-6 ">
        <Button
          type="button"
          title="View"
          icon="/assests/view2.png"
          varient="bg-white text-dark rounded-lg text-[12px] lg:text-[14px] font-medium shadow-xl w-[115px]"
        />
        <Button
          type="button"
          title="github code"
          icon="/assests/github.png"
          varient="bg-black text-white text-[12px] lg:text-[14px] rounded-md shadow-md  font-medium shadow-xl "
        />
      </span>
    </li>
  );
};

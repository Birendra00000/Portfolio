"use client";
import React from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
// import Typical from "react-typical";

const Profile = () => {
  const steps = ["Hello 👋", 1000, "I am Front end developer😁", 1000];
  return (
    <div>
      <div className="profile--container">
        <div className="profile--second--container">
          <div className="third--profile--container">
            <div className="icon--profile--wrapper">
              <Link href="#fa">
                <BsFacebook size={30} />
              </Link>
              <Link href="#ins">
                <BsInstagram size={30} />
              </Link>
            </div>
            <Link href="#ema">
              <AiOutlineMail size={30} />
            </Link>
          </div>
          <div className="profile--content--name">
            <span className="name--wrapper">
              Hello,I&apos;M <span className="highlighted--name">Bibek</span>
            </span>
          </div>
          <div className="profile--details">
            <span className="profile--span">
              <h1>{/* <Typical steps={steps} loop={1} wrapper="p" /> */}</h1>
            </span>
          </div>
          <div className="profile--last--describes">
            Create Application using React
          </div>
          <div className="button--wrapper">
            <button className="button--one">Hire Me!</button>
            <Link href="/assests/Resume.pdf">
              <button className="button--second--wrapper">Get Resume</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

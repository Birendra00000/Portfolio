"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./reausable/Button";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k66tt2m", "template_6shx26i", form.current, {
        publicKey: "u6RV4N2IF7uFMMNZ5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className="w-full padding-2 flex flex-col items-center justify-center gap-20 pb-32 md:gap-28  h-[600px] top-[90px] relative mb-[150px] mt-[140px] sm:mt-[8%] lg:mt-0 lg:tracking-[0.2rem] text-[16px] tracking-[0.1rem]"
      id="CONTACT"
    >
      <div className="w-[85%]  flex justify-center items-center flex-col lg:pb-12 mt-[200px]">
        <div className="flex w-full justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>
        <div className="flex   my-5 lg:py-8">
          <div className="flex justify-center  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="text-center text-white font-semibold lg:font-semibold  uppercase tracking-[0.2rem]  text-[18px] md:text-[18px] lg:text-[18px] lg:mb-0   bg- bg-blue-500 flex items-center rounded-lg h-[50px] p-1">
              Contact
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <form
          ref={form}
          className="flex flex-col justify-center items-center mt-12 w-full"
          onSubmit={sendEmail}
        >
          <div
            className="flex flex-col justify-center gap-3 w-[80%] md:w-[500px] 
              lg:w-[500px] "
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              name="from_name"
              className="p-2 rounded-md outline-none bg-gray-100 text-[12px] lg:text-[16px] "
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              name="from_email"
              className="p-2 rounded-md outline-none bg-gray-100 text-[12px] lg:text-[16px] "
            />
            <textarea
              id=""
              cols="12"
              rows="7"
              placeholder="Start Writing here...."
              required
              name="message"
              className="outline-none w-full md:w-[500px] 
              lg:w-[500px] resize-none  h-[240px] p-2 rounded-md overflow-auto shadow-none bg-gray-100 text-[12px] lg:text-[16px] "
            />
            <span className="w-full flex justify-start">
              <button
                type="submit"
                className="rounded-md border py-2 px-2 cursor-pointer bg-blue-500 shadow-md  text-[12px] lg:text-[16px] text-white font-semibold"
              >
                Send Message
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

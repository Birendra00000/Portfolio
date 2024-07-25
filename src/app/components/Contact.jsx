"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <div className="w-full padding-2 flex flex-col items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20  h-[500px] top-[90px] relative mb-[80px]">
      <div className="w-[85%]  flex justify-center flex-col">
        <span className="text-center font-semibold lg:font-bold  uppercase tracking-[0.3rem] text-blue-500 text-[25px] mb-[3%]">
          Contact
        </span>
        <form
          ref={form}
          className="flex flex-col justify-center items-center"
          onSubmit={sendEmail}
        >
          <div className="flex flex-col justify-center gap-3 w-[500px]">
            <input
              type="text"
              placeholder="Your Name"
              required
              name="from_name"
              className="p-2 rounded-md outline-none bg-gray-100"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              name="from_email"
              className="p-2 rounded-md outline-none bg-gray-100"
            />
            <textarea
              id=""
              cols="12"
              rows="7"
              placeholder="Start Writing here...."
              required
              name="message"
              className="outline-none w-[500px] resize-none  h-[240px] p-2 rounded-md overflow-auto shadow-none bg-gray-100"
            />
            <span className="w-full flex justify-start">
              <button
                type="submit"
                className="rounded-md border py-1 px-2 cursor-pointer bg-red-500 shadow-md shadow-white  text-[12px] lg:text-[16px] text-white"
              >
                Submit
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

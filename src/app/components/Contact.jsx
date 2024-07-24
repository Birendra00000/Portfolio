import React from "react";

const Contact = () => {
  return (
    <div className="w-full padding-2 flex flex-col items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20  h-[500px] top-[90px] relative mb-5">
      <div className="w-[85%]  flex justify-center flex-col">
        <span className="text-center font-semibold lg:font-bold  uppercase tracking-[0.3rem] text-blue-500 text-[25px] mb-[3%]">
          Contact
        </span>
        <form className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center gap-3 w-[500px] shadow-lg ">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-md outline-none"
            />
            <textarea
              id=""
              cols="12"
              rows="7"
              placeholder="Start Writing here...."
              className="outline-none w-[500px] resize-none  h-[240px] p-2 rounded-md overflow-auto shadow-none"
              name="description"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

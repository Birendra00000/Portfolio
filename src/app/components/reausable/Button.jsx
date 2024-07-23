import Image from "next/image";
import React from "react";
const Button = ({ title, icon, varient, type }) => {
  return (
    <button
      className={`flex items-center gap-2 justify-center rounded-full border py-1 px-2 cursor-pointer
      
        ${varient}`}
      type={type}
    >
      <label htmlFor="" className="font-500 whitespace-nowrap cursor-pointer">
        {" "}
        {title}
      </label>
      {icon && <Image src={icon} alt="icon--img" width={16} height={16} />}
    </button>
  );
};

export default Button;

import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-[100%] px-4 py-2 shadow-md items-center bg-blue-900">
        <p className="text-[14px] text-white font-[500] cursor-pointer">{`JSON->2->CSV`}</p>
        <div className="flex text-white text-[10px] justify-start items-center gap-1">
          <FaRegCopyright />
          <p>Copyright. 2024</p>
        </div>
        <a href="https://bishwastimalsina.com.np">
          <p className="text-white text-[10px]">
            Developed and Designed by:{" "}
            <span className="underline">Bishwas Timalsina</span>
          </p>
        </a>
      </div>
    </>
  );
};

export default Footer;

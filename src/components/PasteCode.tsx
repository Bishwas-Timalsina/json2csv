import React, { useState } from "react";

const PasteCode = (props: any) => {
  const { setJsonCode } = props;

  const handleTextAreaChange = (e: any) => {
    setJsonCode(e?.target?.value);
  };

  return (
    <>
      <div className="text-black h-[100%] flex justify-center items-center gap-6 border-[#615d5d] border-[2px] rounded-md p-1 outline-none">
        <textarea
          placeholder="Place your JSON code here...."
          className="w-[100%] h-[100%] outline-none border-none"
          onChange={handleTextAreaChange}
        />
      </div>
    </>
  );
};

export default PasteCode;

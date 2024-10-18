import { FaUpload } from "react-icons/fa";

const FileUploader = () => {
  return (
    <>
      <div className="bg-[#0c3564] text-white h-[100%] flex justify-center items-center gap-6 border-[#615d5d] border-[8px] rounded-md">
        <FaUpload className="text-[24px] font-[500]" />
        <p className="text-[32px] font-[500]">Upload your JSON File</p>
      </div>
    </>
  );
};

export default FileUploader;

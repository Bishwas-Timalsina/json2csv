import { FaDownload } from "react-icons/fa";

const DownloadCSVFIle = (props: any) => {
  const { file } = props;
  const handleDownloadFile = () => {
    const blob = new Blob([file], { type: "text/csv" });
    const link = document.createElement("a");

    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = "data.csv";
    link.click();

    URL.revokeObjectURL(url);
  };
  return (
    <>
      <button
        className="col-span-12 bg-[#116e35] w-[20%] mx-auto px-1 py-3 font-[600] rounded-md text-white flex justify-center align-center h-[100%] gap-3"
        onClick={handleDownloadFile}
      >
        <FaDownload className="text-[20px] flex justify-center items-center py-auto" />
        Download
      </button>
    </>
  );
};

export default DownloadCSVFIle;

import { useState } from "react";
import PasteCode from "../components/PasteCode";
import FileUploader from "../components/FileUploader";
import Info from "../components/Info";
import { jsonToCsv } from "../utils/converter";
import { DummyJson } from "../utils/DummyJson";
import { flattenJson } from "../utils/flattenJson";
// import { jsonToCsv } from "../utils/converter";

const Converter = () => {
  const [jsonCode, setJsonCode] = useState<any>(null);
  const handleConvert = () => {
    console.log(jsonCode);
    const flattenData = [flattenJson(jsonCode)];
    console.log(flattenData);
    // const csv = jsonToCsv(flattenData);
    // console.log(csv);
  };

  return (
    <>
      <div className="w-[100%] flex flex-col justify-center items-center gap-1 px-4 cursor-pointer">
        <div className="grid grid-cols-12 justify-start items-center h-[65vh] w-[100%] gap-2 px-20">
          <div className="col-span-6 h-[100%]">
            <FileUploader />
          </div>
          <div className="col-span-6 h-[100%]">
            <PasteCode setJsonCode={setJsonCode} />
          </div>
          <button
            className="col-span-12 bg-blue-900 w-[40%] mx-auto px-2 py-4 text-[24px] font-[600] rounded-md text-white"
            onClick={handleConvert}
          >
            Convert
          </button>
        </div>
        <div className="border-[1px] border-[#686868] rounded-md h-[20vh] w-[30%]">
          <Info />
        </div>
      </div>
    </>
  );
};

export default Converter;

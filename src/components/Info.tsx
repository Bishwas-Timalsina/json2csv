const Info = () => {
  return (
    <>
      <div className="py-2 px-4">
        <p className="text-[18px] font-[500] text-black px-2 text-center">
          Convert JSON to CSV using this free tool.
        </p>
        <div>
          <ol className="list-decimal ml-4">
            <li>
              <span className="font-[500]">Paste your JSON text</span> in the
              textbox
            </li>
            <li>
              Press the <span className="font-[500]">convert button</span>
            </li>
            <li>
              <span className="font-[500]">Download</span> the resulting file
            </li>
            <li>
              <span className="font-[500]">Open the CSV </span>
              file in Excel or other application
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Info;

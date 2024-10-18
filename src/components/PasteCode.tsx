const PasteCode = (props: any) => {
  const { setJsonCode, errorStatus, setErrorStatus } = props;

  const handleTextAreaChange = (e: any) => {
    setErrorStatus(false);
    setJsonCode(e?.target?.value);
  };

  return (
    <>
      <div
        className={`text-black h-[100%] flex justify-center items-center gap-6 border-[#615d5d] border-[2px] rounded-md p-1 outline-none  ${
          errorStatus ? "border-red-500 border-[2px]" : ""
        }`}
      >
        <textarea
          placeholder="Place your JSON code here...."
          className={`w-[100%] h-[100%] outline-none border-none`}
          onChange={handleTextAreaChange}
        />
      </div>
      {errorStatus && (
        <p className="text-red-400">Please enter valid JSON code</p>
      )}
    </>
  );
};

export default PasteCode;

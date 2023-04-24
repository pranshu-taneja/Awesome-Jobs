function CreateJob1() {
  return (
    <div className="flex h-[100vh] justify-center">
      <div className="top-32 relative w-[577px] h-[564px] bg-white flex flex-col rounded-[10px] border-CardBorder p-8 border">
        <div className="flex justify-between flex-row mb-[24px]">
          <p className="font-poppins font-[400] text-[20px]/[28px]">
            Create a job
          </p>
          <p className="relative font-poppins font-[500] text-[16px]/[24px] top-[2px]">
            Step 1
          </p>
        </div>

        <div className="flex flex-col mb-[24px]">
          <p className="text-[14px]/[20px] font-poppins font-[500]">
            Job Title
          </p>
          <input
            placeholder="ex. UX UI Designer"
            type="text"
            className="rounded-[5px] w-[513px] h-[36px] py-[8px] px-[12px] border border-CardBorder"
          />
        </div>

        <div className="flex flex-col mb-[24px]">
          <p className="text-[14px]/[20px] font-poppins font-[500]">
            Company Name
          </p>
          <input
            placeholder="ex. Google"
            type="text"
            className="rounded-[5px] w-[513px] h-[36px] py-[8px] px-[12px] border border-CardBorder"
          />
        </div>

        <div className="flex flex-col mb-[24px]">
          <p className="text-[14px]/[20px] font-poppins font-[500]">Industry</p>
          <input
            placeholder="ex. Information Technology"
            type="text"
            className="rounded-[5px] w-[513px] h-[36px] py-[8px] px-[12px] border border-CardBorder"
          />
        </div>

        <div className="flex flex-row justify-between mb-[24px]">
          <div>
            <p className="text-[14px]/[20px] font-poppins font-[500]">
              Location
            </p>
            <input
              placeholder="ex. Chennai"
              type="text"
              className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-CardBorder"
            />
          </div>
          <div>
            <p className="text-[14px]/[20px] font-poppins font-[500]">
              Remote Type
            </p>
            <input
              placeholder="ex. In-office"
              type="text"
              className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-CardBorder"
            />
          </div>
        </div>

        <div className="flex justify-end mt-[86px]">
          <button className="rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateJob1;

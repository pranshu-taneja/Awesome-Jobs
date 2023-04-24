export default function CreateJob2() {
  return (
    <div className="flex h-[100vh] justify-center">
      <div className="top-32 relative w-[577px] h-[564px] bg-white flex flex-col rounded-[10px] border-bdrcolor p-8 border">
        <div className="flex justify-between flex-row mb-[24px]">
          <p className="font-poppins font-[400] text-[20px]/[28px]">
            Create a job
          </p>
          <p className="relative font-poppins font-[500] text-[16px]/[24px] top-[2px]">
            Step 2
          </p>
        </div>

        <div className="flex flex-col mb-[24px]">
          <p className="text-[14px]/[20px] font-poppins font-[500]">
            Experience
          </p>
          <div className="flex flex-row justify-between">
            <input
              placeholder="Minimum"
              type="text"
              className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-bdrcolor"
            />
            <input
              placeholder="Maximum"
              type="text"
              className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-bdrcolor"
            />
          </div>
        </div>

        <div className="flex flex-col mb-[24px]">
          <p className="text-[14px]/[20px] font-poppins font-[500]">
            Salary
          </p>
          <div className="flex flex-row justify-between">
            <input
              placeholder="Minimum"
              type="text"
              className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-bdrcolor"
            />
            <input
              placeholder="Maximum"
              type="text"
              className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-bdrcolor"
            />
          </div>
        </div>

        <div className="flex flex-col mb-[24px]">
          <p className="text-[14px]/[20px] font-poppins font-[500]">Total employee</p>
          <input
            placeholder="ex. 100"
            type="text"
            className="rounded-[5px] w-[513px] h-[36px] py-[8px] px-[12px] border border-bdrcolor"
          />
        </div>

        <div className="flex flex-col justify-between mb-[24px]">
          <p className="text-[14px]/[20px] font-poppins font-[500] mb-[4px]">Apply type</p>
          
          <form className="flex flex-row">
              <input className="w-[20px] h-[20px] mr-[4px]" name="applyType" type="radio" value="Quick Apply"/>
              <label htmlFor="Quick Apply" className="font-poppins font-[400] font-[14px]/[20px] text-gray-400 mr-[16px]">Quick Apply</label>
              
              <input className="w-[20px] h-[20px] mr-[4px]" name="applyType" type="radio" value="External"/>
              <label htmlFor="External" className="font-poppins font-[400] font-[14px]/[20px] text-gray-400">External</label>
          </form>
          
        </div>

        <div className="flex justify-end mt-[86px]">
          <button className="rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

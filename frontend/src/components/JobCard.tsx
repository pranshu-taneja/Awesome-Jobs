import NetflixImage from "../assets/netflix.png";

type CardStructer = {
  JobTitle: string;
  CompanyName: string;
  Industry: string;
  Location: string;
  RemoteType: string;

  // step 2 data
  Experience: {
    min: number;
    max: number;
  };
  Salary: {
    min: number;
    max: number;
  };
  TotalEmployee: number;
  ApplyType: string;
};

export default function JobCard({
  JobTitle,
  CompanyName,
  // Industry,
  Location,
  RemoteType,
  Experience,
  Salary,
  TotalEmployee,
  ApplyType,
}: CardStructer) {
  return (
    <div className="border-CardBorder border rounded-[10px] w-[830px] h-[320px] px-[24px] py-[16px] bg-white flex flex-row m-10">
      <img
        src={NetflixImage}
        alt="Netflix Logo"
        className="mr-[8px] w-[48px] h-[48px]"
      />

      <div id="Details" className="">
        <p className="font-[400] font-poppins text-[24px]/[32px] text-FontColor">
          {JobTitle}
        </p>
        <p className="font-[16px]/[24px] font-poppins">{CompanyName}</p>
        <p className="font-[16px]/[24px] font-poppins text-pholder">
          {Location} ({RemoteType})
        </p>
        <div className="h-[24px]"></div>
        <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          Part-Time (9.00 am - 5.00 pm IST)
        </p>
        <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          Experience ({Experience.min} - {Experience.max} years)
        </p>
        <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          INR (₹) {Salary.min} - {Salary.max} / Month
        </p>
        <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          {TotalEmployee} employees
        </p>
        <div className="h-[24px]"></div>

        {/* Button Adding */}
        <div className="flex justify-between">
          {ApplyType === "" ? (
            <div>
              <button className="rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white">
                Apply Now
              </button>
              <button className="rounded-[6px] py-[8px] px-[16px] text-[16px]/[24px] font-poppins font-[500] text-prjblue border-prjblue border">
                External Apply
              </button>
            </div>
          ) : (
            <div>
              <button className="rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white">
                {ApplyType}
              </button>
            </div>
          )}
          {/* <button className="rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white">
            Apply Now
          </button>
          <button className="rounded-[6px] py-[8px] px-[16px] text-[16px]/[24px] font-poppins font-[500] text-prjblue border-prjblue border">
            External Apply
          </button> */}
        </div>
      </div>
    </div>
  );
}

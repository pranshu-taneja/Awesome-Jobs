import NetflixImage from "../assets/netflix.png";

export default function JobCard() {
  return (
    <div className="border-CardBorder border rounded-[10px] w-[830px] h-[320px] px-[24px] py-[16px] bg-white flex flex-row">
      <img
        src={NetflixImage}
        alt="Netflix Logo"
        className="mr-[8px] w-[48px] h-[48px]"
      />

      <div id="Details" className="">
        <p className="font-[400] font-poppins text-[24px]/[32px] text-FontColor">
          UX UI Designer
        </p>
        <p className="font-[16px]/[24px] font-poppins">
          Great Vibes - Information Technology
        </p>
        <p className="font-[16px]/[24px] font-poppins text-pholder">
          Chennai, Tamilnadu, India (In-office)
        </p>
        <div className="h-[24px]"></div>
        <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          Part-Time (9.00 am - 5.00 pm IST)
        </p>
        <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          Experience (1 - 2 years)
        </p>
        <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          INR (₹) 30,000 - 50,000 / Month
        </p>
        <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          51-200 employees
        </p>
        <div className="h-[24px]"></div>

        {/* Button Adding */}
        <div className="flex justify-between">
          <button className="rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white">
            Apply Now
          </button>
          <button className="rounded-[6px] py-[8px] px-[16px] text-[16px]/[24px] font-poppins font-[500] text-prjblue border-prjblue border">
            External Apply
          </button>
        </div>
      </div>
    </div>
  );
}

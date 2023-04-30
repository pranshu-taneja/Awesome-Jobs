import { useState } from "react";
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
  id: string;
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
  id,
}: CardStructer) {
  const [CardData, setCardData] = useState({
    JobTitle: JobTitle,
    CompanyName: CompanyName,
    Location: Location,
    RemoteType: RemoteType,
    Experience: Experience,
    Salary: Salary,
    TotalEmployee: TotalEmployee,
    ApplyType: ApplyType,
    id: id,
  });

  function UpdateFields(fields: Partial<CardStructer>) {
    setCardData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function PutData() {
    fetch(`https://6446405fee791e1e29fa0001.mockapi.io/card-detail/${CardData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CardData),
    });
  }

  return (
    <div className="border-CardBorder border rounded-[10px] w-[830px] h-[320px] px-[24px] py-[16px] bg-white flex flex-row m-10">
      <img
        src={NetflixImage}
        alt="Netflix Logo"
        className="mr-[8px] w-[48px] h-[48px]"
      />

      {/* //------------------- JobTitle ------------------- */}
      <div id="Details" className="">
        <input
          type="text"
          className="font-[400] font-poppins text-[24px]/[32px] text-FontColor"
          value={CardData.JobTitle}
          onChange={(e) => {
            UpdateFields({ JobTitle: e.target.value });
          }}
        />
        {/* <p className="font-[400] font-poppins text-[24px]/[32px] text-FontColor">
          {CardData.JobTitle}
        </p> */}
        {/* //------------------- JobTitle ------------------- */}

        {/* //------------------- Company Name ------------------- */}
        <input
          type="text"
          className="font-[16px]/[24px] font-poppins block"
          value={CardData.CompanyName}
          onChange={(e) => {
            UpdateFields({ CompanyName: e.target.value });
          }}
        />
        {/* <p className="font-[16px]/[24px] font-poppins">{CompanyName}</p> */}
        {/* //------------------- Company Name ------------------- */}

        {/* //------------------- RemoteType & Location ------------------- */}
        <input
          type="text"
          className="font-[16px]/[24px] font-poppins text-pholder"
          value={CardData.Location}
          onChange={(e) => {
            UpdateFields({ Location: e.target.value });
          }}
        />
        <input
          type="text"
          className="font-[16px]/[24px] font-poppins text-pholder"
          value={CardData.RemoteType}
          onChange={(e) => {
            UpdateFields({ RemoteType: e.target.value });
          }}
        />
        {/* <p className="font-[16px]/[24px] font-poppins text-pholder">
            {CardData.Location} ({CardData.RemoteType})
          </p> */}
        {/* //------------------- RemoteType & Location ------------------- */}

        {/* //------------------- Apply Type ------------------- */}
        <div className="h-[24px]"></div>
        <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          Part-Time (9.00 am - 5.00 pm IST)
        </p>
        <div className="font-[16px]/[24px] font-[400] font-poppins text-FontColor inline">
          Experience (
          <input
            type="text"
            className="font-[16px]/[24px] font-poppins"
            value={CardData.Experience.min}
            onChange={(e) => {
              UpdateFields({
                Experience: {
                  ...CardData.Experience,
                  min: parseInt(e.target.value),
                },
              });
            }}
          />
          -
          <input
            type="text"
            className="font-[16px]/[24px] font-poppins"
            value={CardData.Experience.max}
            onChange={(e) => {
              UpdateFields({
                Experience: {
                  ...CardData.Experience,
                  max: parseInt(e.target.value),
                },
              });
            }}
          />
          years)
        </div>
        {/* <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          Experience ({CardData.Experience.min} - {CardData.Experience.max}{" "}
          years)
        </p> */}
        {/* //------------------- Apply Type ------------------- */}

        {/* //------------------- Salary ------------------- */}
        <div className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          INR (₹)
          <input
            type="text"
            className="font-[16px]/[24px] font-poppins"
            value={CardData.Salary.min}
            onChange={(e) => {
              UpdateFields({
                Salary: {
                  ...CardData.Salary,
                  min: parseInt(e.target.value),
                },
              });
            }}
          />
          -
          <input
            type="text"
            className="font-[16px]/[24px] font-poppins"
            value={CardData.Salary.max}
            onChange={(e) => {
              UpdateFields({
                Salary: {
                  ...CardData.Salary,
                  max: parseInt(e.target.value),
                },
              });
            }}
          />
          / Month
        </div>
        {/* <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          INR (₹) {CardData.Salary.min} - {CardData.Salary.max} / Month
        </p> */}
        {/* //------------------- Salary ------------------- */}

        {/* //------------------- Total Employees ------------------- */}
        <div className="inline font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          <input
            type="text"
            className="font-[16px]/[24px] font-poppins"
            value={CardData.TotalEmployee}
            onChange={(e) => {
              UpdateFields({ TotalEmployee: parseInt(e.target.value) });
            }}
          />
          employees
        </div>
        {/* <p className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          {CardData.TotalEmployee} employees
        </p> */}
        {/* //------------------- Total Employees ------------------- */}
        <div className="h-[24px]"></div>
        {/* Button Adding */}
        <div className="flex justify-between">
          {CardData.ApplyType === "" ? (
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
              <button
                className="rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white"
                onClick={() => {
                  console.log(CardData);
                  PutData();
                }}
              >
                {CardData.ApplyType}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

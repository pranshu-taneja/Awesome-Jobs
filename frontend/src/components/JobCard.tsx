import { useState } from "react";
import NetflixImage from "../assets/netflix.png";
import axios from "axios";
import EDIT2 from "../assets/edit2.png";
import DELETE from "../assets/delete.png";

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

export default function JobCard({...DataFetched}: CardStructer) {
  
  //Importing the datafetched in CardData (state)
  const [CardData, setCardData] = useState({...DataFetched});

  const [isDisabled, setisDisabled] = useState(true);

  //------------------- Independent Method for Updating state data -------------------
  function UpdateFields(fields: Partial<CardStructer>) {
    setCardData((prev) => {
      return { ...prev, ...fields };
    });
  }
  //------------------- Independent Method for Updating state data -------------------

  //------------------- Update Operation functionality -------------------
  async function PutData() {

    if(CardData.JobTitle === "" || CardData.CompanyName === "" || CardData.Industry === "") {
      alert("Please fill all the fields");
      window.location.reload();
    }

    try {
      await axios.put(
        `https://6446405fee791e1e29fa0001.mockapi.io/card-detail/${CardData.id}`,
        CardData
        );
        alert("Data Updated Successfully");
      window.location.reload();
    } catch (err) {
      console.log({ ERROR: err });
      alert("Some Error Occured");
    }
  }
  //------------------- Update Operation functionality -------------------
  
  //------------------- Delete Operation functionality -------------------
  async function DeleteData() {
    try {
      await axios.delete(
        `https://6446405fee791e1e29fa0001.mockapi.io/card-detail/${CardData.id}`
        );
        alert("Data Deleted Successfully");
        window.location.reload();
      } catch (err) {
        console.log({ Error: err });
        alert("Some Error Occured");
      }
    }
  //------------------- Delete Operation functionality -------------------

  return (
    <div className="border-CardBorder border rounded-[10px] h-[320px] px-[24px] py-[16px] bg-white flex m-10 w-[40%]">
      <img
        src={NetflixImage}
        alt="Netflix Logo"
        className="mr-[8px] w-[48px] h-[48px]"
      />

      {/* //------------------- JobTitle ------------------- */}
      <div id="Details" className="flex-1">
        <div className="flex justify-between items-center">
          <input
            type="text"
            disabled={isDisabled}
            required
            style={{ width: `${CardData.JobTitle.length}ch` }}
            className="font-[400] font-poppins text-[24px]/[32px] text-FontColor"
            value={CardData.JobTitle}
            onChange={(e) => {
              UpdateFields({ JobTitle: e.target.value });
            }}
          />

          {/* //Edit Button */}
          <div className="flex justify-end">
            <button onClick={setisDisabled.bind(null, !isDisabled)}>
              <img src={EDIT2} alt="Edit" className="w-[28px] h-[28px] " />
            </button>
            {/* //Delete Button */}
            <button
              onClick={() => {
                DeleteData();
              }}
            >
              <img src={DELETE} alt="Edit" className="w-[28px] h-[28px] " />
            </button>
          </div>
        </div>
        {/* //------------------- JobTitle ------------------- */}


        {/* //------------------- Company Name ------------------- */}
        <div>
          <input
            type="text"
            disabled={isDisabled}
            required
            className="font-[400] font-[16px]/[24px] font-poppins"
            style={{ width: `${CardData.CompanyName.length + 1}ch` }}
            value={CardData.CompanyName}
            onChange={(e) => {
              UpdateFields({ CompanyName: e.target.value });
            }}
          />
          - &nbsp;
          <input
            type="text"
            disabled={isDisabled}
            required
            className="font-[400] font-[16px]/[24px] font-poppins inline"
            style={{ width: `${CardData.Industry.length + 1}ch` }}
            value={CardData.Industry}
            onChange={(e) => {
              UpdateFields({ Industry: e.target.value });
            }}
          />
        </div>
        {/* //------------------- Industry ------------------- */}


        {/* //------------------- RemoteType & Location ------------------- */}
        <div>
          <input
            type="text"
            className="font-[16px]/[24px] font-poppins text-pholder"
            style={{ width: `${CardData.Location.length + 1}ch` }}
            value={CardData.Location}
            disabled={isDisabled}
            onChange={(e) => {
              UpdateFields({ Location: e.target.value });
            }}
          />
          (
          <input
            type="text"
            disabled={isDisabled}
            style={{ width: `${CardData.RemoteType.toString().length}ch` }}
            className="font-[16px]/[24px] font-poppins text-pholder text-center"
            value={CardData.RemoteType}
            onChange={(e) => {
              UpdateFields({ RemoteType: e.target.value });
            }}
          />
          )
        </div>
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
            disabled={isDisabled}
            style={{ width: `${CardData.Experience.min.toString().length}ch` }}
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
            disabled={isDisabled}
            className="font-[16px]/[24px] font-poppins"
            style={{ width: `${CardData.Experience.max.toString().length}ch` }}
            size={CardData.Experience.max.toString().length}
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
          &nbsp;years)
        </div>
        {/* //------------------- Apply Type ------------------- */}


        {/* //------------------- Salary ------------------- */}
        <div className="font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          INR (₹)&nbsp;
          <input
            type="text"
            disabled={isDisabled}
            className="font-[16px]/[24px] font-poppins"
            style={{ width: `${CardData.Salary.min.toString().length}ch` }}
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
          - &nbsp;
          <input
            type="text"
            disabled={isDisabled}
            style={{ width: `${CardData.Salary.max.toString().length}ch` }}
            className="font-[16px]/[24px] font-poppins"
            size={CardData.Salary.max.toString().length - 3}
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
        {/* //------------------- Salary ------------------- */}


        {/* //------------------- Total Employees ------------------- */}
        <div className="inline font-[16px]/[24px] font-[400] font-poppins text-FontColor">
          <input
            type="text"
            disabled={isDisabled}
            style={{ width: `${CardData.TotalEmployee.toString().length}ch` }}
            className={`font-[16px]/[24px] font-poppins`}
            value={CardData.TotalEmployee}
            onChange={(e) => {
              UpdateFields({ TotalEmployee: parseInt(e.target.value) });
            }}
          />
          &nbsp;employees
        </div>
        {/* //------------------- Total Employees ------------------- */}
        
        <div className="h-[24px]"></div>


        {/* //------------------- Buttons Adding ------------------- */}
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
              <button className="rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white">
                {CardData.ApplyType}
              </button>
            </div>
          )}
          <div>
            <button
              className="rounded-[6px] py-[8px] px-[16px] text-[16px]/[24px] font-poppins font-[500] text-prjblue border-prjblue border"
              hidden={isDisabled}
              onClick={() => {
                PutData();
              }}
            >
              Save
            </button>
          </div>
        </div>
      {/* //------------------- Buttons Adding ------------------- */}

      </div>
    </div>
  );
}

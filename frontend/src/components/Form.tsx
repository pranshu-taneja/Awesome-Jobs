import CreateJob1 from "./CreateJob1";
import CreateJob2 from "./CreateJob2";
import { useState, FormEvent } from "react";
import useMultistepForm from "./useMultistepForm";
import axios from "axios";


type FormData = {
  //step-1 field data
  JobTitle: string;
  CompanyName: string;
  Industry: string;
  Location: string;
  RemoteType: string;

  //step-2 field data
  Experience: {
    min: string;
    max: string;
  };
  Salary: {
    min: string;
    max: string;
  };
  TotalEmployee: string;
  ApplyType: string;
};

//Dummy data for Intial state
const Intial_Data: FormData = {
  //step 1 data
  JobTitle: "",
  CompanyName: "",
  Industry: "",
  Location: "",
  RemoteType: "",

  // step 2 data
  Experience: {
    min: "",
    max: "",
  },
  Salary: {
    min: "",
    max: "",
  },
  TotalEmployee: "",
  ApplyType: "",
};

export default function Form() {
  const [data, setdata] = useState(Intial_Data);


  //------------------- Functionality of how data will be updated with state -------------------
  function UpdateFields(fields: Partial<FormData>) {
    setdata((prev) => {
      return { ...prev, ...fields };
    });
  }
  //------------------- Functionality of how data will be updated with state -------------------

  //------------------- Communication with the custom Prop -------------------
  const {
    currentStepIndex,
    isLastStep,
    step,
    next,
  } = useMultistepForm([
    //------------------- Passing the data & Method for updating state -------------------
    <CreateJob1 {...data} UpdateFields={UpdateFields} />,
    <CreateJob2 {...data} UpdateFields={UpdateFields} />,
    //------------------- Passing the data & Method for updating state -------------------
  ]);
  //------------------- Communication with the custom Prop -------------------


  //------------------- Posting data using axios -------------------
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);

    try {
      await axios.post(
        "https://6446405fee791e1e29fa0001.mockapi.io/card-detail/",
        data
      );
      alert("Job Created Successfully");
    } catch (err) {
      alert("Some Error Occured");
      console.log(err);
    }
  }
  //------------------- Posting data using axios -------------------

  //------------------- State Management for Pop Up of Form -------------------
  const [isHidden, setIsHidden] = useState(true);
  
  const toggleCardVisibility = () => {
    setIsHidden(!isHidden);
  };
  //------------------- State Management for Pop Up of Form -------------------


  //------------------- Job Listing Page Redirect Button -------------------

  //------------------- Job Listing Page Redirect Button -------------------
  return (
    <div>
      
      <div>
        {/* //------------------- Toggle Form Visibility ------------------- */}
        <button
          className="fixed top-16 left-16 rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white"
          onClick={toggleCardVisibility}
          >
            Create Job
        </button>
        {/* //------------------- Toggle Form Visibility ------------------- */}


        {/* //------------------- Job Listing redirect Button ------------------- */}
        <button className="fixed top-16 right-16 rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white">
          <a href="/#/joblisting">Job Listing Page</a>
        </button>
        {/* //------------------- Job Listing redirect Button ------------------- */}
      </div>



      {/* //------------------- Form ------------------- */}
      <div 
      className={`top-32 relative w-[577px] h-[564px] bg-white flex-col rounded-[10px] border-CardBorder p-8 border ${isHidden ? 'hidden' : ''}`}
      >
        <form onSubmit={onSubmit}>
          <div className="flex justify-between flex-row mb-[24px]">
            <p className="font-poppins font-[400] text-[20px]/[28px]">
              Create a job
            </p>
            <p className="relative font-poppins font-[500] text-[16px]/[24px] top-[2px]">
              Step {currentStepIndex + 1}
            </p>
          </div>

          
          {/* Input Fields */}
          {step}
          {/* Input Fields */}


          {/* //------------------- Next Button ------------------- */}
          <div className="flex justify-end mt-[86px] font-poppins">
            <button
              className="rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white"
              type="submit"
            >
              {!isLastStep ? "Next" : "Save"}
            </button>
          </div>
          {/* //------------------- Next Button ------------------- */}
        </form>
      </div>
      {/* //------------------- Form ------------------- */}


    </div>
    // </div>
  );
}

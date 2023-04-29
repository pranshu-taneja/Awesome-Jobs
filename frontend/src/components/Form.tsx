import CreateJob1 from "./CreateJob1";
import CreateJob2 from "./CreateJob2";
import { useState, FormEvent } from "react";
import useMultistepForm from "./useMultistepForm";
import axios from "axios";

type FormData = {
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

const Intial_Data: FormData = {
  JobTitle: "",
  CompanyName: "",
  Industry: "",
  Location: "",
  RemoteType: "",

  // step 2 data
  Experience: {
    min: 0,
    max: 0,
  },
  Salary: {
    min: 0,
    max: 0,
  },
  TotalEmployee: 0,
  ApplyType: "",
};

export default function Form() {
  const [data, setdata] = useState(Intial_Data);

  function UpdateFields(fields: Partial<FormData>) {
    setdata((prev) => {
      return { ...prev, ...fields };
    });
  }

  const {
    NofSteps,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    step,
    prev,
    next,
  } = useMultistepForm([<CreateJob1 {...data} UpdateFields={UpdateFields} />, <CreateJob2 {...data} UpdateFields={UpdateFields}/>]);

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
    } catch (err) {
      console.log({ Error: "Some Error Occured" });
      console.log(err);
    }
  }
  //------------------- Posting data using axios -------------------

  return (
    <div className="top-32 relative w-[577px] h-[564px] bg-white flex flex-col rounded-[10px] border-CardBorder p-8 border">
      {/* <div className="flex h-[100vh] justify-center"> */}
      <form onSubmit={onSubmit}>
        <div className="flex justify-between flex-row mb-[24px]">
          <p className="font-poppins font-[400] text-[20px]/[28px]">
            Create a job
          </p>
          <p className="relative font-poppins font-[500] text-[16px]/[24px] top-[2px]">
            Step {currentStepIndex + 1} of {NofSteps}
          </p>
        </div>

        {/* Fields */}
        {step}
        {/* Fields */}

        {/* //------------------- Buttons ------------------- */}
        <div className="flex justify-end mt-[86px] font-poppins">
          {!isFirstStep && (
            <button
              className="rounded-[6px] mr-5 py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white"
              type="submit"
              onClick={prev}
            >
              Back
            </button>
          )}
          <button
            className="rounded-[6px] py-[8px] px-[16px] bg-prjblue text-[16px]/[24px] font-poppins font-[500] text-white"
            type="submit"
          >
            {!isLastStep ? "Next" : "Submit"}
          </button>
        </div>
        {/* //------------------- Buttons ------------------- */}



      </form>
    </div>
    // </div>
  );
}

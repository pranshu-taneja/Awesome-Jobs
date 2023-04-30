import JobCard from "./JobCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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

export default function JobListing() {
  const [JobList, setJobList] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const response = await axios.get(
        "https://6446405fee791e1e29fa0001.mockapi.io/card-detail"
      );
      setJobList(response.data);
    }
    getJobs();
  }, []);

  
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-around">
        {JobList.map((JobData) => {
          return <JobCard key={uuidv4()} {...(JobData as CardStructer)}/>;
        })}
      </div>
    </div>
  );
}

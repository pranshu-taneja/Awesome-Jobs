import "./App.css";
import CreateJob1 from "./components/createJob1";
import CreateJob2 from "./components/CreateJob2";
import JobCard from "./components/JobCard";

function App() {
  return (
    <div className="flex h-[100vh] justify-center">
      <div>
        <CreateJob1 />
        <CreateJob2 />
        <JobCard />
      </div>
    </div>
  );
}

export default App;

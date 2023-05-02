import "./App.css";
import Form from "./components/Form";
import JobListing from "./components/JobListing";
import {  HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="flex h-[100vh] justify-center">
        <div>
          <Routes>
            <Route path="/" element={<Form />}></Route>
            <Route path="/joblisting" element={<JobListing />}></Route>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
export default App;

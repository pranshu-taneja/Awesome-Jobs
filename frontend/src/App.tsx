import "./App.css";
import Form from "./components/Form";
import JobListing from "./components/JobListing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-[100vh] justify-center">
        <div>
          <Routes>
            <Route path="/" element={<Form />}></Route>
            <Route path="/joblisting" element={<JobListing />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;

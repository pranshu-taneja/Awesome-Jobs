const express = require("express");
const axios = require("axios");
const cors = require("cors");
const port = 5000;

const app = express();
app.use(cors());

// https://jsonplaceholder.typicode.com/todos
// https://6446405fee791e1e29fa0001.mockapi.io/card-detail
// https://6446405fee791e1e29fa0001.mockapi.io/dummy

//------------------- created the read operation  -------------------
app.get("/get/:id?", async (req, res) => {
  try {
    const id = req.params.id;
    let url = "https://6446405fee791e1e29fa0001.mockapi.io/card-detail";
    if (id) {
      url += `/${id}`;
    }
    const response = await axios.get(url);
    res.status(200).json(response.data); // added status code
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error fetching data from API" });
  }
});
//------------------- created the read operation  -------------------



//------------------- created the delete operation      --just any msg isn't coming -------------------
app.delete("/delete/:id?", async(req,res)=>{
  const id = req.params.id;
  try{
    await axios.delete(`https://6446405fee791e1e29fa0001.mockapi.io/card-detail/${id}`);
    res.status(205).json({message: "Data successfully deleted!!"});
  }
  catch(err){
    res.status(500).json({Error: "Some Error occured"});
  }
})
//------------------- created the delete operation      --just any msg isn't coming -------------------


//------------------- created the put operation      --completely done -------------------
const update = {
  "JobTitle": "JobTitle 777",
  "Location": "Location 777",
  "RemoteType": "___",
  "Experience": 99,
  "Salary": 8,
  "Employees": 49,
  "id": "5"
}

app.put("/put/:id?", async(req,res)=>{
  const id = req.params.id;
  
  try{
    await axios.put(`https://6446405fee791e1e29fa0001.mockapi.io/card-detail/${id}`, update);     //change it to req.body btw
    res.status(206).json({message: "Data successfully updated!!"});
  }
  catch(err){
    res.status(500).json({Error: "Some Error occured"});
  }
})
//------------------- created the put operation      --completely done -------------------


//------------------- created the create operation (post)-------------------
const data = {
  "JobTitle": "JobTitle 1919",
  "Location": "Location 9933",
  "RemoteType": "__37",
  "Experience": 99,
  "Salary": 8,
  "Employees": 49,
}

app.post("/post", async(req,res)=>{
  try{
    await axios.post('https://6446405fee791e1e29fa0001.mockapi.io/card-detail/', data);
    res.status(207).json({MSG: "data Creation phase successfull!!"});
  }
  catch(error){
    res.status(505).json({Error: "Data didn't got uploaded!!🥲"})
  }
})
//------------------- created the create operation (post)-------------------




app.get("/", async (req, res) => {
  try {
    res.send("Hello Worrld!!");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const port = 5000;

const app = express();
app.use(cors());

const URL = "https://jsonplaceholder.typicode.com/todos"

// https://jsonplaceholder.typicode.com/todos
// https://64491ffab88a78a8f0fe5194.mockapi.io/api/v1/Dummy

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://64491ffab88a78a8f0fe5194.mockapi.io/api/v1/Dummy');
    res.json(response.data);
  } catch (error) {
    console.log("some error");
    res.status(500).json({ message: 'Error fetching data from API' });
  }
});



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

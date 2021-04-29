const express = require("express");
const connectDB = require("./config/db");
const goalRoutes = require("./routes/goals");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
connectDB();

app.use("/", goalRoutes);

app.get("/", (req, res) => {
  res.status(200).json("Welcome to Goals api");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up and running");
});

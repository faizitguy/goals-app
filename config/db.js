const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    mongoose.connect(
      process.env.URI_CONNECTION,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("database is connected");
      }
    );
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

module.exports = connectDB;

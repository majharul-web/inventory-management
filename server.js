const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
var colors = require("colors");
const PORT = process.env.PORT || 8080;

const app = require("./app");

// create database connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log(`Database is connected`.green.bold);
  } catch (error) {
    console.log("db is not connected".red.bold);
  }
};

connectDb();

app.listen(PORT, () => {
  console.log(`Server running in port no http://localhost:${PORT}`.yellow.bold);
});

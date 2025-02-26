const express = require("express");
const app = express();
const mongoose=require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });


app.listen(8800, () => {
  console.log("Backend server is running!");
});

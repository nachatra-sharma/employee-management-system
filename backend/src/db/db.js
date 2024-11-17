const mongoose = require("mongoose");

async function connectToDB(URL) {
  try {
    await mongoose.connect(URL);
  } catch (error) {
    console.log("Something went wrong while connecting with DB");
  }
}

module.exports = connectToDB;

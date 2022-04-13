const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Successfully connected to the DB");
  } catch (error) {
    console.log(error)
    throw new Error("Error connecting to the DB")
  };
};

module.exports = {
  dbConnection
};

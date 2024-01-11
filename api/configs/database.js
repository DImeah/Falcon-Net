// Import dependencies
import mongoose from "mongoose";
import "dotenv/config";

// Declare variables
const port = process.env.PORT;
const url = process.env.MONGO_URI;

// Function to connect to MongoDB and save data
const connectDB = async function () {
  try {
    mongoose.connect(url);
    console.log("Connection to MongoDB successful");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectDB;

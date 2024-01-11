// Import dependencies
import mongoose from "mongoose";
import "dotenv/config";

// Load environment variables from .env file using "dotenv" package

// Declare variables
const port = process.env.PORT; // Port number obtained from environment variables
const url = process.env.MONGO_URI; // MongoDB connection URI obtained from environment variables

// Function to connect to MongoDB
const connectDB = async function () {
  try {
    // Connect to MongoDB using the provided connection URI
    await mongoose.connect(url);

    // Log a success message if the connection is successful
    console.log("Connection to MongoDB successful");
  } catch (error) {
    // Log an error message if there's an issue connecting to MongoDB
    console.error("Error connecting to MongoDB:", error.message);
  }
};

// Export the connectDB function for use in other parts of the application
export default connectDB;

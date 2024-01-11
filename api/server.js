// Import dependencies
import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./configs/database.js";

// Declaring variables
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = process.env.PORT;

// Middleware setup
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(morgan("tiny")); // Use Morgan for request logging

// Define a basic route for the root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the application
const serverApp = async () => {
  try {
    // Connect to the MongoDB database
    await connectDB();

    // Start the Express server
    app.listen(port, () => {
      console.log(
        `Server started at http://localhost:${port} and Connected to MongoDB `
      );
    });
  } catch (error) {
    console.log(error);
  }
};

// Call the function to start the application
serverApp();

// Import dependencies
import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./configs/database.js"; // Import the function to connect to MongoDB
import auth from "./routes/auth.js";
import crypto from "crypto";
import session from "express-session";

// Declaring variables
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = process.env.PORT; // Port number obtained from environment variables
const userAuthRouter = auth;
const sessionSecret = crypto.randomBytes(32).toString("hex"); // Generate a random secret with 32 characters

// Middleware setup
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(morgan("tiny")); // Use Morgan for request logging
app.use(cors()); // Enable CORS for all routes
app.use(
  session({
    // Use the express-session middleware
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
  })
);

// Define a basic route for the root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use the defined router for paths starting with "/api/v1"
app.use("/api/v1", userAuthRouter);

// Start the application
const serverApp = async () => {
  try {
    // Connect to the MongoDB database
    await connectDB();

    // Start the Express server
    server.listen(port, () => {
      console.log(
        `Server started at http://localhost:${port} and Connected to MongoDB Atlas Cloud`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

// Call the function to start the application
serverApp();

import express from "express";
import { registerUser, loginUser } from "../controller/auth.js";

// Create an instance of the Express Router
const router = express.Router();

// Route to register a new user
router.post("/register", registerUser);

// Route to login a User
router.post("/login", loginUser);

// User logout (example, actual implementation might vary based on your authentication mechanism)
router.post("/logout", (req, res) => {
  // Implement your logout logic here, such as clearing sessions or invalidating tokens
  res.status(200).json({ message: "Logout successful." });
});

export default router;

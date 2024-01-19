import express from "express";
import { registerUser, loginUser, logoutUser } from "../controller/auth.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

// Create an instance of the Express Router
const router = express.Router();

// Route to register a new user
router.post("/register", registerUser);

// Route to login a User
router.post("/login", loginUser);

// User logout (example, actual implementation might vary based on your authentication mechanism)
router.post("/logout", logoutUser);

export default router;

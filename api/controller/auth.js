import generateToken from "../configs/jwtToken.js";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import mongoose from "mongoose";
import "dotenv/config";

const jwtSecretKey = process.env.JWT_SECRET_KEY;

// Register a new user
export async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Check for all fields
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Check if the username or email is already registered
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists." });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const registeredUser = await newUser.save();
    if (registeredUser) {
      res.status(201).json({
        _id: registeredUser._id,
        username: registeredUser.username,
        email: registeredUser.email,
        isAdmin: registeredUser.isAdmin,
        token: generateToken(registeredUser._id),
      });
    } else {
      throw new Error("User registration authentication failed.");
    }

    // res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }

  // Close the connection after saving
  // mongoose.connection.close();
}

// Login a user
export async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const registeredUser = await User.findOne({ username });

    // Compare the entered password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(
      password,
      registeredUser.password
    );

    // Check if the user exists
    if (registeredUser && passwordMatch) {
      res.status(201).json({
        _id: registeredUser._id,
        username: registeredUser.username,
        email: registeredUser.email,
        isAdmin: registeredUser.isAdmin,
        token: generateToken(registeredUser._id),
      });
    } else {
      throw new Error(
        "User Login authentication failed. Invalid username or password."
      );
    }

    // // Check if passwords match
    // if (!passwordMatch) {
    //   return res.status(401).json({ error: "Invalid username or password." });
    // }

    // // Generate a JWT token
    // const token = jwt.sign(
    //   { userId: user._id, username: user.username }, // Payload
    //   process.env.JWT_SECRET, // Secret Key
    //   { expiresIn: "1h" }, // Options
    //   (err, token) => {
    //     // Callback
    //     if (err) {
    //       console.error("Error signing JWT:", err);
    //       // Handle the error, for example, send an error response
    //       return res.status(500).json({ error: "Internal Server Error" });
    //     }

    //     // If no error, send the token in the response
    //     res.status(200).json({ token });
    //   }
    // );

    // res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

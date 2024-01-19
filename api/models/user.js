// Import the mongoose library
import mongoose, { Schema } from "mongoose";

// Define the schema for the user model
const userSchema = new mongoose.Schema(
  {
    // Username field, required and must be unique
    username: { type: String, required: true, unique: true },

    // Email field, required and must be unique
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: false },

    // Password field, required for user authentication
    password: { type: String, required: true },
    friends: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create the User model based on the schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
export default User;

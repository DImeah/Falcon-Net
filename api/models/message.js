// Import the mongoose library
import mongoose from "mongoose";

// Define the schema for the message model
const messageSchema = new mongoose.Schema(
  {
    // Reference to the receiver user using their ObjectId
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    // Reference to the sender user using their ObjectId
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    // Reference to the chat associated with this message using its ObjectId
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create the Message model based on the schema
const Message = mongoose.model("Message", messageSchema);

// Export the Message model for use in other parts of the application
export default Message;

// Import the mongoose library
import mongoose from "mongoose";

// Define the schema for the chat model
const chatSchema = mongoose.Schema(
  {
    // Name of the chat, trimmed to remove extra whitespaces
    chatName: { type: String, trim: true },

    // Flag indicating whether the chat is a group chat or not
    isGroupChat: { type: Boolean, default: false },

    // Array of user IDs participating in the chat
    users: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ],

    // Reference to the latest message in the chat
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },

    // Reference to the user who is the admin of the group (if it's a group chat)
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create the Chat model based on the schema
const Chat = mongoose.model("Chat", chatSchema);

// Export the Chat model for use in other parts of the application
export default Chat;

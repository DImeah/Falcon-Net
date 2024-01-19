// Import the mongoose library
import mongoose, { Schema, model } from "mongoose";

// Define the schema for the chat model
const chatSchema2 = mongoose.Schema(
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
// const Chat = mongoose.model("Chat", chatSchema2);

// Export the Chat model for use in other parts of the application
// export default Chat;

const chatSchema = mongoose.Schema({
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  messages: [
    {
      message: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const Chat = model("Chat", chatSchema);
export default Chat;

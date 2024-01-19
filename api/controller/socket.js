import Chat from "../models/chat.js";
import User from "../models/user.js";

export const activeUsers = async (userId) => {
  const activeUsers = await User.find({
    $and: [{ _id: { $ne: userId } }, { isActive: true }],
  });
  return activeUsers;
};

export const userConversation = async (userId) => {
  const conversations = await Chat.find({ sender: userId });
  return conversations;
};

/*

// wait for message
  socket.on("sendMessage", async (data) => {
    const chatCriteria = {
      $and: [
        {
          $or: [{ sender: data.sender }, { receiver: data.sender }],
        },
        {
          $or: [{ sender: data.receiver }, { receiver: data.receiver }],
        },
      ],
    };
    const conversations = await Chat.findOne(chatCriteria);
    if (!conversations) {
      const newConverse = new Chat({
        sender: data.sender,
        receiver: data.receiver,
        messages: [
          {
            message: data.message.message,
            receiver: data.message.receiver,
          },
        ],
      });
      const savedMessage = await newConverse.save();
      if (savedMessage) {
        const messages = await Chat.find(chatCriteria);
        socket.join(savedMessage._id.toString());
        if (messages) {
          io.to(savedMessage._id.toString()).emit(messages);
        }
      }
    } else {
      conversations.messages = conversations.messages.concat({
        message: data.message.message,
        receiver: data.message.receiver,
      });
      const savedMessages = await conversations.save();
      if (savedMessages) {
        const messages = await Chat.find(chatCriteria);
        if (messages) {
          io.to(conversations._id.toString()).emit(messages);
        }
      }
    }
  });

*/

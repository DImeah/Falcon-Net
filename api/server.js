// Import dependencies
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./configs/database.js"; // Import the function to connect to MongoDB
import auth from "./routes/auth.js";
import crypto from "crypto";
// import session from "express-session";
import { activeUsers, userConversation } from "./controller/socket.js";
import Chat from "./models/chat.js";

console.log(process.env.CLIENT_URL);

// Declaring variables
const app = express();

const sessionSecret = crypto.randomBytes(32).toString("hex"); // Generate a random secret with 32 characters
// Middleware setup
app.use(cookieParser());
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(morgan("tiny")); // Use Morgan for request logging
const allowedOrigins = [
  "http://localhost:5173",
  "https://falcon-net.vercel.app",
];
// middleware
app.use(function (req, res, next) {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
}); // Enable CORS for all routes

// app.use(
//   session({
//     // Use the express-session middleware
//     secret: sessionSecret,
//     resave: false,
//     saveUninitialized: true,
//   })
// );
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://falcon-net.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  },
  pingTimeout: 60000,
  maxHttpBufferSize: 1e8,
  connectionStateRecovery: {
    // the backup duration of the sessions and the packets
    maxDisconnectionDuration: 2 * 60 * 1000,
    // whether to skip middlewares upon successful recovery
    skipMiddlewares: true,
  },
});

const port = process.env.PORT; // Port number obtained from environment variables
const userAuthRouter = auth;

// Define a basic route for the root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use the defined router for paths starting with "/api/v1"
app.use("/api/v1", userAuthRouter);

// soocket IO
io.on("connection", async (socket) => {
  const user = socket.handshake.query.username;
  console.log(user, "connected");
  socket.on("getActiveUsers", async (userId) => {
    const users = await activeUsers(userId);
    socket.emit("activeUsers", users);
  });

  socket.on("getConversations", async (userId) => {
    const conversations = await userConversation(userId);
    socket.emit("conversations", conversations);
  });

  // Wait for messsage
  socket.on("sendMessage", async (data) => {
    const sendsenderrrrrQuery = {
      $and: [
        {
          $or: [{ owner: data.owner }, { receiver: data.owner }],
        },
        {
          $or: [{ owner: data.receiver }, { receiver: data.receiver }],
        },
      ],
    };
    const converse = await Chat.find({
      receiver: data.receiver,
      sender: data.sender,
    });
    console.log(converse, "converse");
    if (!converse?.length) {
      const message = await Chat.create(data);
      if (message) {
        io.to(data.owner).to(data.receiver).emit(message);
      }
    } else {
      converse.messages = converse.messages.concat(data.messages);
      converse.save();
      const messages = await Chat.find(sendsenderrrrrQuery);
      io.to(data.owner).to(data.receiver).emit(message);
    }
  });

  socket.on("disconnect", (reason) => {
    socket.on("getActiveUsers", async () => {
      const unactive = await User.findByOneAndUpdate(
        { username: user },
        {
          isActive: false,
        },
        { new: true }
      );
      if (unactive) {
        const users = await activeUsers();
        io.emit("activeUsersv2", users);
      }
    });
    console.log(user, "diconnected because ", reason);
  });
});

// Start the application
export const serverApp = async () => {
  try {
    // Connect to the MongoDB database
    await connectDB();

    // Start the Express
    if (connectDB()) {
      server.listen(port, () => {
        console.log(
          `Server started at ${port} and Connected to MongoDB Atlas Cloud`
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Call the function to start the application
serverApp();

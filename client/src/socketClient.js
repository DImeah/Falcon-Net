import io from "socket.io-client";

const URL = "https://falcon-net.onrender.com";

export const socketClient = (username) => {
  const socket = io(URL, {
    query: { username },
    reconnection: true,
    reconnectionAttempts: 3,
    reconnectionDelay: 1000,
  });
  // socket.on("disconnect", (reason) => {
  //   console.log("Disconnected:", reason);
  // });
  return socket;
};

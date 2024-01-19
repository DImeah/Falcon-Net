// import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { socketClient } from "../socketClient";
// import useAuth from "./useAuth";
import { useSelector } from "react-redux";
import { selectUser } from "../features/authSlice";
export default function useSocket() {
  const user = useSelector(selectUser);
  //   const [cookies] = useCookies(["access_token"]);
  const [socket, setSocket] = useState();

  useEffect(() => {
    if (user?.username) {
      const socket = socketClient(user?.username);
      if (socket) {
        setSocket(socket);
      }
    }

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [user?.username]);

  return {
    socket,
  };
}

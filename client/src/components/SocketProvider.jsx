import { useEffect } from "react";
import socket from "../services/socket";

function SocketProvider({ children }) {
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log(
        "Connected:",
        socket.id
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return children;
}

export default SocketProvider;
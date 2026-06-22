import { create } from "zustand";
import socket from "../services/socket";

const useSocketStore = create(() => ({
  socket,
}));

export default useSocketStore;
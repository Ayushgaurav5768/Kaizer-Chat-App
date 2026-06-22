import { create } from "zustand";

const useChatStore = create((set) => ({
  selectedUser: null,

  messages: [],

  setSelectedUser: (user) =>
    set({
      selectedUser: user,
    }),

  setMessages: (messages) =>
    set({
      messages,
    }),

  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        message,
      ],
    })),
}));

export default useChatStore;
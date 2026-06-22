import { useState, useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import MessageBubble from "../chat/MessageBubble";
import useChatStore from "../../store/chatStore";

function ChatWindow() {
  const [input, setInput] = useState("");

  const {
    messages,
    setMessages,
    addMessage,
    selectedUser,
  } = useChatStore();

  const bottomRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        text: "Welcome to Kaizer 🚀",
        own: false,
        time: "10:00",
      },
      {
        text: "Select a user and start chatting!",
        own: false,
        time: "10:01",
      },
    ]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    addMessage({
      text: input,
      own: true,
      time: currentTime,
      seen: false,
    });

    setInput("");
  };

  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader />

      {!selectedUser ? (
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <h2 className="text-gray-500 text-xl">
            Select a user to start chatting
          </h2>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto bg-gray-100 p-5">
            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                text={msg.text}
                own={msg.own}
                time={msg.time}
                seen={msg.seen}
              />
            ))}

            <div ref={bottomRef}></div>
          </div>

          <div className="border-t bg-white p-4 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ChatWindow;
import ChatHeader from "./ChatHeader";

function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader />

      <div className="flex-1 p-5 bg-gray-100">
        Messages will appear here
      </div>

      <div className="p-4 bg-white border-t flex">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-lg px-4 py-2"
        />

        <button className="ml-3 bg-blue-500 text-white px-6 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
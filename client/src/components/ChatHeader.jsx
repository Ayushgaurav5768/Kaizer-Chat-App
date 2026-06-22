import useChatStore from "../../store/chatStore";

function ChatHeader() {
  const { selectedUser } =
    useChatStore();

  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-5">
      <div>
        <h2 className="font-semibold text-lg">
          {selectedUser
            ? selectedUser.name
            : "Select a User"}
        </h2>

        <p className="text-sm text-green-500">
          {selectedUser?.online
            ? "Online"
            : ""}
        </p>
      </div>

      {selectedUser && (
        <div className="flex gap-4 text-gray-500 text-xl">
          <button>📞</button>
          <button>🎥</button>
          <button>⋮</button>
        </div>
      )}
    </div>
  );
}

export default ChatHeader;
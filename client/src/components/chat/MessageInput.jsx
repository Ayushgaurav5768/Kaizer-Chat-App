import { useState } from "react";

function MessageInput({
  onSend,
}) {
  const [message, setMessage] =
    useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="p-4 border-t flex">
      <input
        className="flex-1 border rounded-lg p-2"
        placeholder="Type message..."
        value={message}
        onChange={(e) =>
          setMessage(
            e.target.value
          )
        }
      />

      <button
        onClick={handleSend}
        className="ml-2 px-5 py-2 bg-blue-600 text-white rounded-lg"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
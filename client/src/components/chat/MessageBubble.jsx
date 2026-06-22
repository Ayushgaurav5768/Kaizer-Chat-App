function MessageBubble({ message, own }) {
  return (
    <div
      className={`flex mb-3 ${
        own ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-sm px-4 py-2 rounded-xl ${
          own
            ? "bg-blue-500 text-white"
            : "bg-white border"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default MessageBubble;
function MessageBubble(props) {
  return (
    <div
      className={`flex mb-3 ${
        props.own
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-md px-4 py-2 rounded-2xl shadow ${
          props.own
            ? "bg-blue-500 text-white"
            : "bg-white text-black"
        }`}
      >
        <p>{props.text}</p>

        <div className="flex justify-end items-center gap-1 mt-1 text-xs opacity-75">
          <span>{props.time}</span>

          {props.own && (
            <span>
              {props.seen ? "✓✓" : "✓"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;
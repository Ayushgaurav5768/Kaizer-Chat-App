import useChatStore from "../../store/chatStore";

function Sidebar() {
  const { setSelectedUser, selectedUser } =
    useChatStore();

  const users = [
    {
      id: 1,
      name: "John",
      online: true,
    },
    {
      id: 2,
      name: "Emma",
      online: false,
    },
    {
      id: 3,
      name: "Alex",
      online: true,
    },
    {
      id: 4,
      name: "Sophia",
      online: true,
    },
  ];

  return (
    <div className="w-80 bg-white border-r flex flex-col">
      {/* Header */}
      <div className="p-5 border-b">
        <h1 className="text-2xl font-bold text-blue-600">
          Kaizer
        </h1>

        <p className="text-sm text-gray-500">
          Real-Time Chat
        </p>
      </div>

      {/* Search */}
      <div className="p-3 border-b">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() =>
              setSelectedUser(user)
            }
            className={`p-4 border-b hover:bg-gray-100 cursor-pointer flex items-center gap-3 transition ${
              selectedUser?.id === user.id
                ? "bg-blue-50"
                : ""
            }`}
          >
            {/* Avatar */}
            <div className="relative">
              <img
                src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />

              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  user.online
                    ? "bg-green-500"
                    : "bg-gray-400"
                }`}
              ></span>
            </div>

            {/* User Info */}
            <div>
              <h3 className="font-medium">
                {user.name}
              </h3>

              <p className="text-sm text-gray-500">
                {user.online
                  ? "Online"
                  : "Offline"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
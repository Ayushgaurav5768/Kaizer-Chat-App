function Sidebar() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Emma" },
    { id: 3, name: "Alex" },
  ];

  return (
    <div className="w-80 bg-white border-r">
      <div className="p-5 border-b">
        <h1 className="text-2xl font-bold">
          Kaizer
        </h1>
      </div>

      {users.map((user) => (
        <div
          key={user.id}
          className="p-4 hover:bg-gray-100 cursor-pointer border-b"
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
function Avatar({
  name,
  online,
}) {
  return (
    <div className="relative">
      <img
        src={`https://ui-avatars.com/api/?name=${name}`}
        alt={name}
        className="w-10 h-10 rounded-full"
      />

      {online && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
      )}
    </div>
  );
}

export default Avatar;

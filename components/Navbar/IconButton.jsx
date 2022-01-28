export const IconButton = ({ icon, position }) => {
  if (position === "left") {
    position = "left-0";
  } else if (position === "right") {
    position = "right-0";
  }
  return (
    <div
      className={`${position} transition border border-zinc-700 duration-200 ease-in-out absolute w-12 h-12 text-center -translate-y-1/2 text-zinc-300 rounded-md top-1/2 hover:cursor-pointer hover:bg-zinc-900 hover:text-bright-orange`}
    >
      <span className="absolute text-3xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 material-icons">
        {icon}
      </span>
    </div>
  );
};

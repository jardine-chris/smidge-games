export const IconButton = ({ icon, position }) => {
  if (position === "left") {
    position = "left-0";
  } else if (position === "right") {
    position = "right-0";
  }
  return (
    <span
      className={`${position} absolute -translate-y-1/2 top-1/2 text-4xl material-icons`}
    >
      {icon}
    </span>
  );
};

import { useState } from "react";

export const FloatingInput = ({ type, id, label }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  function handleTextChange(text) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const inputBoxStyle =
    "shadow appearance-none h-12 border border-zinc-700/70 placeholder:text-gray-500 focus:placeholder:text-gray-400 bg-zinc-900 focus:bg-zinc-600 w-full py-2 px-3 text-white leading-tight caret-orange-600 focus:outline-none focus:shadow-outline";
  return (
    <div id="float-label">
      <input
        id={id}
        className={inputBoxStyle}
        type={type}
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
      />

      <label
        className={`${isActive ? "Active" : ""} block text-zinc-400 text-sm mb-2`}
        htmlFor={id}
      >
        {label}
      </label>
      <style jsx>
        {`
          #float-label {
            position: relative;
          }

          #float-label input {
            width: 100%;
            padding-top: 2rem;
          }

          #float-label label {
            pointer-events: none;
            position: absolute;
            left: 0.75rem;
            transform: translate(0, -2.15rem) scale(1);
            transform-origin: top left;
            transition: all 0.2s ease-out;
          }

          #float-label:focus-within label {
            transform: translate(0, -2.5rem) scale(0.75);
            color: white;
          }

          #float-label .Active {
            transform: translate(0, -2.5rem) scale(0.75);
          }
        `}
      </style>
    </div>
  );
};

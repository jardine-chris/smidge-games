import React from "react";

export const Label = (props) => {
  return (
    <div className="flex py-1 overflow-hidden text-xs transition duration-150 rounded cursor-pointer bg-zinc-600 hover:bg-zinc-500" key={props.key}>
      <div className="px-2">
        <span className="text-gray-300 font-montserrat">{props.name}</span>
      </div>
    </div>
  );
};

import React from "react";

export const Label = (props) => {
  return (
    <div className="flex py-1 overflow-hidden text-xs rounded cursor-pointer bg-grurp-500 hover:bg-grurp-400" key={props.key}>
      <div className="px-2">
        <span className="text-gray-300 font-montserrat">{props.name}</span>
      </div>
    </div>
  );
};

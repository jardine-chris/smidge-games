import React from "react";

export const Categories = (props) => {
  return (
    <div className="px-4 mt-4">
      <h3 className="mb-1 text-sm font-light text-gray-500 font-montserrat">Tags</h3>
      <div className="flex flex-wrap gap-2">{props.children}</div>
    </div>
  );
};

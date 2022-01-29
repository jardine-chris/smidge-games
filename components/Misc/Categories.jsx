import React from "react";

export const Categories = (props) => {
  return (
    <div className="relative px-2 pt-6 pb-4 my-4 border rounded border-grurp-700 bg-grurp-900">
      <h3 className="absolute left-4 px-4 text-sm font-light text-white bg-orange-600 rounded -top-2.5 font-montserrat">
        Categories
      </h3>
      <div className="flex flex-wrap gap-2">{props.children}</div>
    </div>
  );
};

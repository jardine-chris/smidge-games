import React, { useState } from "react";

export const MultilinkButton = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      {props.text}
      <span className="absolute material-icons">
        {!isExpanded ? "keyboard_arrow_right" : "keyboard_arrow_down"}
      </span>
    </div>
  );
};

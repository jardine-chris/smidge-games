import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md"

export const MultilinkButton = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      {props.text}
      <span className="absolute material-icons">
        {!isExpanded ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowDown />}
      </span>
    </div>
  );
};

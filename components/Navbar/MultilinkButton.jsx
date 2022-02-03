import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md"

export const MultilinkButton = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="relative" onClick={() => setIsExpanded(!isExpanded)}>
      {props.text}
      <div className="absolute left-4 material-icons">
        {!isExpanded ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
      </div>
    </div>
  );
};

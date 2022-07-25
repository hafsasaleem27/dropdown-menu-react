import React from "react";

function DropdownItem({ children, changeDropdown, changeDropdownTo }) {
  return (
    <div
      className="dropdownItem"
      onClick={() => changeDropdown?.(changeDropdownTo)}
    >
      {children}
    </div>
  );
}

export default DropdownItem;

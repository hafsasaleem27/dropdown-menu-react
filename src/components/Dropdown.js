import React from "react";

function Dropdown({ children, dropdownHeight }) {
  const height = dropdownHeight ? dropdownHeight : 'auto';

  return(
    <div className="dropdown" style={{ height: height }}>
      { children }
    </div>
  );
}

export default Dropdown;
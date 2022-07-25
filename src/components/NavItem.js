import React, { useState, useEffect, useRef } from "react";

function NavItem({ icon, children }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const navItemRef = useRef();

  useEffect(() => {
    window.addEventListener("click", event => {
      if (!navItemRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    });

    return () => window.removeEventListener("click");
  }, []);

  return (
    <div className="navItem" ref={navItemRef}>
      <span
        className="iconContainer"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        {icon}
      </span>
      {openDropdown && children}
    </div>
  );
}

export default NavItem;

import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import {
  AiOutlineSetting,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineProfile,
  AiOutlineDelete
} from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { GiMoon } from "react-icons/gi";
import { CSSTransition } from "react-transition-group";

import NavItem from "./NavItem";
import DropdownItem from "./DropdownItem";
import Dropdown from "./Dropdown";

function Navbar() {
  const [activeDropDown, setActiveDropdown] = useState("main");
  const [dropdownHeight, setDropdownheight] = useState();

  const changeActiveDropdown = dropdown => {
    setActiveDropdown(dropdown);
  };

  const changeDropDownHeight = el => {
    setDropdownheight(el.offsetHeight);
  };

  return (
    <nav className="navbar">
      <NavItem icon={<RiMenu3Line />}>
        <Dropdown dropdownHeight={dropdownHeight}>
          <CSSTransition
            in={activeDropDown === "main"}
            timeout={500}
            classNames="slide-primary"
            unmountOnExit
            onEnter={changeDropDownHeight}
          >
            <div className="primaryDropdownMenu">
              {/************************** 
                 primary dropdown menu
               ***************************/}
              <DropdownItem
                changeDropdown={changeActiveDropdown}
                changeDropdownTo="secondary"
              >
                <span>
                  <span className="dropdownItemIcon">
                    <AiOutlineSetting />
                  </span>
                  <span className="dropdownItemText">Settings</span>
                </span>
                <span className="dropdownItemIcon">
                  <AiOutlineArrowRight />
                </span>
              </DropdownItem>
              <DropdownItem>
                <span>
                  <span className="dropdownItemIcon">
                    <RiAccountCircleLine />
                  </span>
                  <span className="dropdownItemText">Account</span>
                </span>
              </DropdownItem>
            </div>
          </CSSTransition>

          <CSSTransition
            in={activeDropDown === "secondary"}
            timeout={500}
            classNames="slide-secondary"
            unmountOnExit
            onEnter={changeDropDownHeight}
          >
            <div className="secondaryDropdownMenu">
              {/************************** 
                secondary dropdown menu
               ***************************/}
              <DropdownItem
                changeDropdown={changeActiveDropdown}
                changeDropdownTo="main"
              >
                <span className="dropdownItemIcon">
                  <AiOutlineArrowLeft />
                </span>
              </DropdownItem>
              <DropdownItem>
                <span>
                  <span className="dropdownItemIcon">
                    <AiOutlineProfile />
                  </span>
                  <span className="dropdownItemText">Profile</span>
                </span>
              </DropdownItem>
              <DropdownItem>
                <span>
                  <span className="dropdownItemIcon">
                    <GiMoon />
                  </span>
                  <span className="dropdownItemText">Theme</span>
                </span>
              </DropdownItem>
              <DropdownItem>
                <span>
                  <span className="dropdownItemIcon">
                    <AiOutlineDelete />
                  </span>
                  <span className="dropdownItemText">Delete Account</span>
                </span>
              </DropdownItem>
            </div>
          </CSSTransition>
        </Dropdown>
      </NavItem>
    </nav>
  );
}

export default Navbar;

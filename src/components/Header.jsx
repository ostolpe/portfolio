import React from "react";
import MenuListItem from "./MenuListItem";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">Oliver Stolpe</a>
      </div>
      <nav className="header__navbar">
        <ul className="navbar__list">
          <MenuListItem text="Projects" link="/" />
          <MenuListItem text="About" link="/" />
          <MenuListItem text="Contact" link="/" />
        </ul>
      </nav>
    </div>
  );
};

export default Header;

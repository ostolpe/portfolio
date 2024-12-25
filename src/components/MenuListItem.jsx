import React from "react";

const MenuListItem = ({ text, link }) => {
  return (
    <div>
      <li className="navbar__item">
        <a href={link}>{text}</a>
      </li>
    </div>
  );
};

export default MenuListItem;

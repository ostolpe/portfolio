import React from "react";

const MenuListItem = ({ text, link }) => {
  return (
    <>
      <li className="navbar__item">
        <a href={link}>{text}</a>
      </li>
    </>
  );
};

export default MenuListItem;

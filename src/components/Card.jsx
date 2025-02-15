import React from "react";

const Card = ({ imglink, text, link }) => {
  return (
    <li>
      <a href={link} className="card">
        <img className="card__img" src={imglink} alt="" />
        <h3 className="card__text">{text}</h3>
      </a>
    </li>
  );
};

export default Card;

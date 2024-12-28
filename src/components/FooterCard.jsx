import React from "react";

const FooterCard = ({ imglink, link }) => {
  return (
    <div>
      <a href={link} className="footer__card">
        <img src={imglink} alt="" className="footer__image" />
      </a>
    </div>
  );
};

export default FooterCard;

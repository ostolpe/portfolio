import React from "react";
import FooterCard from "./FooterCard";

const Footer = () => {
  return (
    <div className="footer">
      <FooterCard
        imglink="./public/github_icon.png"
        link="https://github.com/ostolpe"
      />
      <FooterCard
        imglink="./public/linkedin_icon.png"
        link="https://www.linkedin.com/in/oliver-stolpe-85b811338/"
      />
    </div>
  );
};

export default Footer;

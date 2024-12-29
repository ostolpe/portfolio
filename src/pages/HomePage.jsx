import React from "react";
import Card from "../components/Card";

const Main = () => {
  return (
    <>
      <div className="hero">
        <img
          className="hero__img"
          src="./src/images/placeholder_img.avif"
          alt=""
        />
        <div className="hero__text">
          <h2>Hello.</h2>
          <p>
            My name is Oliver. I am currently studying to become a software
            developer, specializing in C# and ASP.NET.
          </p>
          <a href="/about" className="hero__button">
            LEARN MORE
          </a>
        </div>
      </div>

      <div className="content__wrapper">
        <h3 className="projects__header">Some projects i have worked on</h3>
        <ul className="content">
          <Card
            imglink="./src/images/placeholder_img.avif"
            text="Project Name"
            link="https://github.com/ostolpe/"
          />

          <Card
            imglink="./src/images/placeholder_img.avif"
            text="Project Name"
            link="https://github.com/ostolpe/"
          />

          <Card
            imglink="./src/images/placeholder_img.avif"
            text="Project Name"
            link="https://github.com/ostolpe/"
          />
          <Card
            imglink="./src/images/placeholder_img.avif"
            text="Project Name"
            link="https://github.com/ostolpe/"
          />
        </ul>
      </div>
    </>
  );
};

export default Main;

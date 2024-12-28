import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="hero">
        <img
          className="hero__img__about"
          src="./src/images/oliver.jpg"
          alt=""
        />
        <div className="hero__text">
          <p className="introduction__text">
            My name is Oliver Stolpe, and I'm an aspiring software developer
            from Stockholm, Sweden. I am currently studying Programming with a
            focus on C# and ASP.NET at Nackademin. While my education emphasizes
            backend development, I am also gaining proficiency in HTML, CSS,
            JavaScript, TypeScript, and React.
          </p>

          <a
            href="./src/files/Oliver_Stolpe_Resume.pdf"
            download="Oliver_Stolpe_Resume.pdf"
            class="download__button"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
      <div className="reference__wrapper">
        <h3>Read what other people say about me!</h3>
        <div className="reference">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatum culpa nulla, ut quod facere quo quibusdam velit odio
            necessitatibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatum culpa nulla, ut quod facere quo quibusdam velit odio
            necessitatibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatum culpa nulla, ut quod facere quo quibusdam velit odio
            necessitatibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatum culpa nulla, ut quod facere quo quibusdam velit odio
            necessitatibus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

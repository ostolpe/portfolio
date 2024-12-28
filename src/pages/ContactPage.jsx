import React from "react";
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <ContactForm />

      <ul className="content">
        <Card
          imglink="./src/images/linkedin_icon.png"
          text="Linkedin"
          link="https://www.linkedin.com/in/oliver-stolpe-85b811338/"
        />
      </ul>
    </>
  );
};

export default ContactPage;

import React, { useRef } from "react";
import "/ContactForm.css";

const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    e.target.reset();
    alert("Message submited!");
  };

  return (
    <div className="contact-form-container">
      <h1>Contact me</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" ref={nameRef} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" ref={emailRef} />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          ref={messageRef}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

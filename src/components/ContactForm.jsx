import React, { useState } from "react";
import "/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setShowPopup(true);
      return;
    }

    setFormData({ name: "", email: "", message: "" });
    setShowPopup(false);
    alert("Form submitted successfully!");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <p>Please fill in all fields.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

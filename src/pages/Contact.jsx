import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;  
    const inputValue = target.value; 
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (!userName) {
      setErrorMessage("Name is required.");
      return;
    }

    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    // Clear form and error message after successful submission
    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");  // Reset error message
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Contact</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello {userName}</h3>
          <h2>Info</h2>
          <address>
            Coral Spring, FL <br />
            Phone #: <a href="tel:954.768.3729">954.768.3729</a>
            <br />
            Email:{" "}
            <a href="mailto://fabiancermeno@gmail.com">
              fabiancermeno@gmail.com
            </a>
          </address>
          <p>
            <strong>Thanks for contacting me!</strong>
          </p>
        </div>

        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            <label htmlFor="contact-name">Name</label> {/* Changed for to htmlFor */}
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Name"
            />

            <label htmlFor="contact-email">Email</label> {/* Changed for to htmlFor */}
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Email"
            />

            <label htmlFor="contact-message">Message</label> {/* Changed for to htmlFor */}
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              id="contact-message"
              placeholder="Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
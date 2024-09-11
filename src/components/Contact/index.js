import React, { useState } from "react";

// Import a helper function for validating email addresses
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Declare state variables for form fields and error message
  // Initialize all fields with an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    // Extract the target element and its properties from the event object
    const { target } = e;
    const inputType = target.name;  // Get the name of the input field
    const inputValue = target.value; // Get the value of the input field

    // Update the state based on which input field triggered the change
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    // Prevent the default form submission behavior (page refresh)
    e.preventDefault();

    // Check if the email is valid and the userName is not empty
    // If validation fails, set an error message
    if (!validateEmail(email) || !userName) {
      alert("Email or Name is invalid");
      return; // Exit the function to allow the user to correct the errors
    }

    // Check if the message field is not empty
    // If it is empty, set an error message
    if (!message) {
      alert("Message is required.");
      return; // Exit the function to allow the user to provide the message
    }

    // Clear the input fields if validation passes
    setUserName("");
    setMessage("");
    setEmail("");
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
            Phone #: <a href="tel:954-768-3729">954-768-3729</a>
            <br />
            Email:{" "}
            <a href="mailto://fabiancermeno@gmail.com">
              fabiancermeno@gmail.com
            </a>
          </address>
          <p>
            <strong>Thanks for contact me!</strong>
          </p>
        </div>

        {/* contact form section  */}
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* Name */}
            <label for="contact-name">Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Name"
            />

            {/* Email */}
            <label for="contact-email">Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Email"
            />

            {/* Message */}
            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
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
import { RiArrowDropLeftFill, RiCloseLine } from "@remixicon/react";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsLetter = () => {
  const closeAsideBtnRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      company: e.target.company.value,
      phone: e.target.phone.value,
      jobTitle: e.target.jobTitle.value,
    };

    // EmailJS service
    emailjs
      .send(
        "service_u0gcj0s", // Replace with your EmailJS service ID
        "template_zdmhx6e", // Replace with your EmailJS template ID
        formData, // Pass form data
        "YzQP8TCxZh0JzVGQB" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          // console.log("Email sent successfully!", response.status, response.text);
          // alert("Email sent successfully!");
          toast.success("Subscription successful!");
          //   reset();
        },
        (error) => {
          // console.error("Failed to send email:", error);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div style={{padding:'5rem'}}>
      <div className="modal-overlay subscribe-modal">
        <div className="modal-content">
          {/* <Link to="/" >
            <button
              ref={closeAsideBtnRef}
              style={{
                position: "absolute",
                width: "max-content",
                left: "51px",
              }}
              className="submit-button"
            >
              <span>Back to home</span>
            </button>
          </Link> */}
          <h2>Subscribe to Our Insights</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="firstName"
                type="text"
                placeholder="First name *"
                required
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last name *"
                required
              />
            </div>
            <div className="form-group">
              <input name="email" type="email" placeholder="Email *" required />
              <input name="company" type="text" placeholder="Company" />
            </div>
            <div className="form-group">
              <input name="phone" type="tel" placeholder="Phone" />
              <input name="jobTitle" type="text" placeholder="Job Title" />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

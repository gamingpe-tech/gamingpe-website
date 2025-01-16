import React, { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const closeAsideBtnRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      company: e.target.company.value,
      phoneNumber: e.target.phone.value,
      description: e.target.description.value,
    };

    try {
      const response = await axios.post("https://api.payz365.com/email/subscribe", formData);

      if (response.status === 200 || response.status === 201) {
        form.reset(); // Reset form on success
        toast.success("Subscription successful!");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      toast.error("Subscription failed. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="modal-overlay subscribe-modal">
        <div className="modal-content">
          <h2>Subscribe to Our Insights</h2>
          <form onSubmit={handleSubmit} className="subscribe-form">
            <div className="form-group">
              <input
                name="firstName"
                type="text"
                placeholder="First name *"
                required
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #2D6A77",
                  color: "#1392d4",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last name *"
                required
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #2D6A77",
                  color: "#1392d4",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email *"
                required
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #2D6A77",
                  color: "#1392d4",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              />
              <input
                name="company"
                type="text"
                placeholder="Company"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #2D6A77",
                  color: "#1392d4",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="form-group">
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #2D6A77",
                  color: "#1392d4",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              />
              <input
                name="description"
                type="text"
                placeholder="Description"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #2D6A77",
                  color: "#1392d4",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="submit-button"
                style={{
                  backgroundColor: "#41ae49",
                  color: "#FFFFFF",
                  padding: "10px 20px",
                  border: "1px solid #2D6A77",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

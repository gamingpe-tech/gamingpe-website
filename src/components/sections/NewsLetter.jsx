import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { LoadingButton } from "@mui/lab"; // Import the LoadingButton
import { useState } from "react";

const NewsLetter = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.payz365.com/email/subscribe",
        formData
      );
      setLoading(false); // End loading
      if (response.status === 200 || response.status === 201) {
        form.reset(); // Reset form on success
        navigate("/gamingpe/event");
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
        <div className="modal-content Services">
          <h2
            className="w-100"
            style={{
              fontSize: "52px",
              background:
                "linear-gradient(99.32deg, #B7CEA6 43.4%, #ECFBFE 54.69%, #FCFEF5 48.66%, #C0D4C9 63.86%)",
              backgroundClip: "text",
            }}
          >
            JOIN OUR EVENT
          </h2>

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
              <LoadingButton
                type="submit"
                loading={loading} // Show loading spinner while submitting
                variant="contained"
                sx={{
                  backgroundColor: "#41ae49",
                  color: "#FFFFFF",
                  padding: "10px 20px",
                  border: "1px solid #2D6A77",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Join!
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

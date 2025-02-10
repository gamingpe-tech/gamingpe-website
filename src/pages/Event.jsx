import { Link } from "react-router-dom";
import Google_Calendar_icon from "../assets/images/world map animation/Google_Calendar_icon.svg";
import Google_Maps_icon from "../assets/images/world map animation/Google_Maps_icon.svg";
import connectorImg from "../assets/images/index/connector_img.webp";
import { Typography } from "@mui/material";

const EventInvite = () => {
  return (
    <section className="Error ComingSoon">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse gy-md-0 gy-4">
          <div className="col-md-6">
            <section className="AboutServices">
              <figure
                data-aos="zoom-in-up"
                className="position-relative text-center"
              >
                <img
                  src={connectorImg}
                  alt="connectorImg"
                  style={{
                    animation: "none",
                  }}
                />
              </figure>
            </section>
          </div>
          <div className="col-md-6">
            <div
              className="d-flex justify-content-center flex-column h-100 text-md-start text-center align-items-md-start align-items-center"
              data-aos="fade-up"
            >
              <h2>Congratulations 🎉🎉</h2>
              <h1 className="py-lg-2" style={{}}>
                You are Invited!
              </h1>
              <Typography
                variant="body1"
                sx={{
                  marginTop: "1rem",
                  fontSize: "2rem",
                  pb: ".5rem !important",
                }}
              >
                <img
                  src={Google_Calendar_icon}
                  alt="Google_Maps_icon"
                  style={{ animation: "none", width: "35px" }}
                />
                <Typography
                  component="span"
                  sx={{
                    ml: "1rem",
                    fontSize: "25px",
                  }}
                  variant="body2"
                >
                  23rd, 24th and 25th Feb 2025
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginTop: "1rem",
                  fontSize: "2rem",
                  display: "flex",
                }}
              >
                <img
                  src={Google_Maps_icon}
                  alt="Google_Maps_icon"
                  style={{
                    marginLeft: "5px",
                    animation: "none",
                    width: "27px",
                  }}
                />
                <Link
                  href="https://www.google.com/maps/place/Festival+Arena+-+Festival+City/@25.2136661,55.3594556,983"
                  style={{
                    fontSize: "25px",
                    lineHeight: "1.2",
                    marginLeft: "1rem",
                  }}
                >
                  {" "}
                  Fastival Arena, Festival City, 133B Stand Number
                </Link>
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "25px",
                  ml: "1rem",
                  color: "white",
                }}
                variant="body2"
              >
                {" "}
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-lg-5 pt-lg-5 mt-4 pt-4">
          <p className="w-100 text-center">
            Copyright &copy; 2025 GamingPe. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventInvite;

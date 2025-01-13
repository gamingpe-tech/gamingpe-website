import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { sectionData } from "../../../mockData/sectionData";

const AboutServices = () => {
  const {
    title,
    description,
    image,
    heading,
    title2,
    title3,
    description2,
    description3,
    comonDesc,
  } = sectionData.aboutServices;

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensure animations happen only once
    });
  }, []);

  return (
    <section className="Services AboutServices">
      <div className="container">
        <div className="row gy-md-0 gy-5">
          <div className="col-lg-6 col-md-6">
            <div
              className="d-flex justify-content-center flex-column h-100 mt-lg-5"
              data-aos="fade-up"
            >
              <div className="text-md-start text-center">
                <h2 data-aos="fade-left">{heading}</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    marginTop: "10px",
                  }}
                >
                  <div data-aos="fade-left" data-aos-delay="100">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <div data-aos="fade-left" data-aos-delay="200">
                    <h3>{title2}</h3>
                    <p>{description2}</p>
                  </div>
                  <div data-aos="fade-left" data-aos-delay="300">
                    <h3>{title3}</h3>
                    <p>{description3}</p>
                  </div>
                </div>
              </div>
              {/* Uncomment this section if needed
              <div className="d-flex align-items-center pt-4 mt-lg-2 justify-content-md-start justify-content-center">
                <div>
                  <Link className="hover1" to={"/gamingpe/features"}>
                    Get the Card
                  </Link>
                </div>
              </div>
              */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="position-relative">
              <figure
                className="d-flex justify-content-center position-relative"
                data-aos="zoom-in-up"
              >
                <img src={image} alt="ServicesImg" />
              </figure>
            </div>
          </div>
          <div style={{ marginTop: "4rem" }}>
            <h4 style={{ color: "#cfffd2" }} data-aos="fade-up">
              {comonDesc}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { sectionData } from "../../../mockData/sectionData";

const AboutFlexibility = () => {
  const { title, description, title2, description2, title3, description3 } = sectionData.aboutFlexibility;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensure animations occur only once
    });
  }, []);

  return (
    <section className="AboutFlexibility">
      <div className="container">
        <h2 data-aos="fade-right" data-aos-delay="200">
          Empowering Seamless Payments and Growth Through AI Innovation
        </h2>
        <div className="row gy-md-0 gy-4">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              marginTop: "50px",
            }}
          >
            <div data-aos="fade-right" data-aos-delay="400">
              <h3 style={{ textTransform: "none", paddingBottom: "1rem" }}>
                {title}
              </h3>
              <p style={{ color: "#fff" }}>{description}</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="600">
              <h3 style={{ textTransform: "none", paddingBottom: "1rem" }}>
                {title2}
              </h3>
              <p style={{ color: "#fff" }}>{description2}</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="800">
              <h3 style={{ textTransform: "none", paddingBottom: "1rem" }}>
                {title3}
              </h3>
              <p style={{ color: "#fff" }}>{description3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFlexibility;

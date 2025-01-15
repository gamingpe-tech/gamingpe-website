import React from "react";
import { sectionData } from "../../mockData/sectionData";
import { Link } from "react-router-dom";
import HomeWMap from "./homeWmap.mp4";
import Flag from "react-world-flags"; // Import the flag component
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const countries = [
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Egypt", code: "EG" },
  { name: "Thailand", code: "TH" },
  { name: "Turkey", code: "TR" },
  { name: "Vietnam", code: "VN" },
  { name: "Bangladesh", code: "BD" },
  { name: "Brazil", code: "BR" },
];

const Hero = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  const { title, title2, title3, countries_image } =
    sectionData.hero;

  return (
    <section className="Hero">
      {/* Main Content Layer */}
      <div className="content-container">
        <h3 className="global-gradient-text" data-aos="fade-right">{title}</h3>
        <h3 data-aos="fade-right" data-aos-delay="200">{title2}</h3>
        <h3 data-aos="fade-right" data-aos-delay="400">{title3}</h3>
        <p className="hero-description" data-aos="fade-right" data-aos-delay="600">
          Unlocking New Horizons For International Growth.
        </p>
        <div className="hero-description2" data-aos="fade-right" data-aos-delay="800">
          Keep transactions secure with advanced fraud detection.
        </div>
        <div className="flags-container" style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          marginTop: "20px",
          justifyContent: "left",
        }}>
          {countries.map((country, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={1000 + index * 100}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
                gap: "8px",
                flexBasis: "calc(25% - 10px)",
              }}
            >
              <Flag
                code={country.code}
                className="flag"
                style={{
                  width: "25px",
                  height: "40px",
                  borderRadius: "4px",
                }}
              />
              <span
                className="name"
                style={{ color: "#fff", textAlign: "center", fontSize: "16px" }}
              >
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="video-container">
        <video
          src={HomeWMap} // Replace with your video file path
          autoPlay
          muted
          playsInline
          className="background-video-hero"
        />
      </div>
    </section>
  );
};

export default Hero;

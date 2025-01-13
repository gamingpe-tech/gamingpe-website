import React from "react";
import StatsCards from "../utils/StatsCards";
import { statsData } from "../../../mockData/statsData";
import { sectionData } from "../../../mockData/sectionData";

// Import country images
import country1 from "../../../assets/images/index/country1.png";
import country2 from "../../../assets/images/index/country2.png";
import country3 from "../../../assets/images/index/country3.png";
import country4 from "../../../assets/images/index/country4.png";
import country5 from "../../../assets/images/index/country5.png";
import country6 from "../../../assets/images/index/country6.png";
import country7 from "../../../assets/images/index/country7.png";
import country8 from "../../../assets/images/index/country8.png";

const Stats = () => {
  const { title, description, video } = sectionData.stats;

  return (
    <section className="Stats">
      <div className="container">
        <div className="row gy-md-0 gy-4">
          <div className="col-md-6">
            <div>
              <div className="text-md-start text-center" data-aos="fade-up">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="d-flex flex-wrap justify-content-between gap-lg-4 gap-3">
                {statsData.map((stat, index) => (
                  <StatsCards
                    key={index}
                    value={stat.value}
                    description={stat.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <video
              src={video} // Replace with your video file path
              autoPlay
              loop
              muted
              playsInline
              className="background-video"
            />
            <div className="orbit">
              <img src={country1} alt="icon1" className="orbit-item" />
              <img src={country2} alt="icon2" className="orbit-item" />
              <img src={country3} alt="icon3" className="orbit-item" />
              <img src={country4} alt="icon4" className="orbit-item" />
              <img src={country5} alt="icon5" className="orbit-item" />
              <img src={country6} alt="icon6" className="orbit-item" />
              <img src={country7} alt="icon7" className="orbit-item" />
              <img src={country8} alt="icon8" className="orbit-item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

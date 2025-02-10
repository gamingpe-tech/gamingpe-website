import { useEffect, useState } from "react";
import StatsCards from "../utils/StatsCards";
import { statsData } from "../../../mockData/statsData";
import { sectionData } from "../../../mockData/sectionData";
import Flag from "react-world-flags"; // Import the flag component

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

const Stats = () => {
  const { title, description, video } = sectionData.stats;

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const timeouts = [];

    countries.forEach((_, index) => {
      const delay = index * 2.5 * 1000; // Convert delay from seconds to milliseconds
      const timeout = setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]); // Add the index to visible items after delay
      }, delay);

      timeouts.push(timeout);
    });

    return () => {
      // Clear timeouts on component unmount
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

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
              className="background-video-stats"
            />
            <div className="orbit">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="orbit-item"
                  style={{
                    display: visibleItems.includes(index) ? "flex" : "none", // Show only if index is in visibleItems
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Flag
                    code={country.code}
                    className="flag"
                    style={{
                      width: "28%",
                      height: "25%",
                      borderRadius: "0px",
                    }}
                  />
                  <span
                    className="name"
                    style={{ color: "#fff", marginLeft: "8px" }}
                  >
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

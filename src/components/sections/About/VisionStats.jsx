import React from "react";
import StatsCards from "../utils/StatsCards";
import { statsData } from "../../../mockData/statsData";
import { sectionData } from "../../../mockData/sectionData";

const VisionStats = () => {
  const { title, description, image, video } = sectionData.visionstats;

  return (
    <section className="Stats" style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "500px",
      paddingTop: "80px",
      paddingBottom: "150px",
      marginTop:'50px'
    }}>
      <div className="container">
        <div className="row gy-md-0 gy-4">

            <div>
              <div className="text-md-start text-center" data-aos="fade-up">
                <h2>{title}</h2>
                {description.map((desc, index) => (
                  <p key={index} className={index === 0 ? "pb-0" : "pb-0"}>
                    {desc}
                  </p>
                ))}
              </div>
             
            </div>
          </div>{" "}
        </div>
   
    </section>
  );
};

export default VisionStats;

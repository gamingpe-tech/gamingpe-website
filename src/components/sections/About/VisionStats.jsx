import React from "react";
import StatsCards from "../utils/StatsCards";
import { statsData } from "../../../mockData/statsData";
import { sectionData } from "../../../mockData/sectionData";

const VisionStats = () => {
  const { title, description, image, video } = sectionData.visionstats;

  return (
    <section className="Stats">
      <div className="container">
        <div className="row gy-md-0 gy-4">
          {" "}
          <div className="col-md-6">
            {/* <figure data-aos="zoom-in-up">
              <img className="w-100" src={image} alt="Stats" />
            </figure> */}
            <video
              src={video} // Replace with your video file path
              autoPlay
              loop
              muted
              playsInline
              className="background-video"
            />
          </div>
          <div className="col-md-6">
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
      </div>
    </section>
  );
};

export default VisionStats;

import React from "react";
import { Link } from "react-router-dom";
import {
  RiArrowRightSLine,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "@remixicon/react";
import ServicesCard from "./utils/ServicesCard";
import { sectionData } from "../../mockData/sectionData";
import {
  servicesCardsData,
  socialMediaTransactions,
} from "../../mockData/servicesData";
import chatBot from "../../assets/images/index/chatbot.mp4";

const Services = () => {
  const { title, description, image, image2 } = sectionData.services;

  const iconComponents = {
    RiYoutubeFill: <RiYoutubeFill />,
    RiFacebookFill: <RiFacebookFill />,
    RiTwitterFill: <RiTwitterFill />,
    RiInstagramFill: <RiInstagramFill />,
  };

  return (
    <section className="Services">
      <div className="container">
        <div className="row gy-md-0 gy-5">
          <div className="col-lg-6 col-md-6">
            <div className="d-flex justify-content-center flex-column h-100 mt-lg-5">
              <div className="text-md-start text-center" data-aos="fade-up">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="d-flex gap-lg-4 gap-3">
                {servicesCardsData.map((card, index) => (
                  <ServicesCard
                    key={index}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
              <div className="d-flex align-items-center pt-md-5 pt-4 justify-content-md-start justify-content-center">
                <div>
                  <Link to={"/gamingpe/features"} className="hover1">
                    Learn More
                  </Link>
                </div>
                {/* <div>
                  <Link to={"/gamingpe/features"} className="hover2">
                    Register Now <RiArrowRightSLine />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="position-relative">
              <figure className="d-flex justify-content-center position-relative">
                <img src={image} alt="ServicesImg" data-aos="zoom-in-up" />
              </figure>
              <div className="position-absolute chatBotVideo" data-aos="zoom-in-up" >
                <div className="d-flex flex-column gap-3">
                  {/* <img src={image2} alt="ServicesImg" data-aos="zoom-in-up" style={{borderRadius: "12px"}} /> */}
                  <video
                    src={chatBot} // Replace with your video file path
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ borderRadius: "15px" }}
                    // className="background-video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

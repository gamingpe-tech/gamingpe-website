import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { partnersLogos, settings } from "../../mockData/technicalConnectorData";

const TechnicalConnectorsLogos = () => {
  return (
    <section className="Partners" data-aos="fade-up">
      <div className="container">
        <Slider {...settings} style={{padding:'25px 0px'}}>
          {partnersLogos.map((logo, index) => (
            <Link key={index}>
              <figure className="d-flex justify-content-center">
                <img src={logo.src} alt={logo.alt}  style={{width:'27%',height:'20%'}}/>
              </figure>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TechnicalConnectorsLogos;

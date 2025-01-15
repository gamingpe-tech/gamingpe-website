import React from "react";
import { Link } from "react-router-dom";
import PricingCard from "./utils/PricingCard";
import { sectionData } from "../../mockData/sectionData";
import { pricingOptions } from "../../mockData/pricingData";

const APIIntegrationPage = () => {
  const { title, description, image } = sectionData.api_integration;

  return (
    <section className="Pricing APIIntegration">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse gy-md-0 gy-4">
          <div className="col-md-6">
            <figure
              className="position-relative d-flex justify-content-center align-items-center"
              data-aos="zoom-in-up"
            >
              <img src={image} alt="pricing_Img" />
            </figure>
          </div>
          <div className="col-md-6">
            <div>
              <div className="text-md-start text-center" data-aos="fade-up">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="d-flex flex-column gap-md-4 gap-3">
                <p>
                  In today's interconnected economy, businesses must often cater
                  to various local payment to meet diverse customer needs.
                  However, integrating multiple payment gateways for different
                  regions can be complicated and-consuming. This is where a
                  single API integration proves beneficial.
                </p>
                <p>
                  With Just One API Integration, businesses can effortlessly
                  connect with multiple local payment providers across emerging
                  markets. This cohesive approach eliminates the hassle of
                  managing several integrations, reducing both technical
                  overhead and operational complexities related to different
                  payment systems.
                </p>
                <p>
                  By utilizing an easy-integrate REST API, companies can access
                  a variety of popular local payment options, ensuring they
                  align with regional preferences and boost customer
                  satisfaction. This not only speeds up the integration process
                  but also simplifies ongoing maintenance, as all updates are
                  handled through the central API.
                </p>
                <p>
                  Additionally, Just One API Integration offers a scalable
                  solution that can evolve with the business, allowing for the
                  addition of new payment methods without extensive
                  reengineering. This streamlined integration ultimately helps
                  businesses broaden their reach, enhance payment processes, and
                  create a seamless payment experience for customers worldwide.
                </p>
              </div>
              {/* <div>
                <Link className="hover1" to={"/gamingpe/pricing"}>
                  Get Started
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIIntegrationPage;

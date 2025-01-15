import React from "react";
import { Link } from "react-router-dom";
import PricingCard from "./utils/PricingCard";
import { sectionData } from "../../mockData/sectionData";
import { pricingOptions } from "../../mockData/pricingData";

const CryptoCurrencyPage = () => {
  const { title, description, image } = sectionData.cryptocurrency;

  return (
    <section className="Pricing APIIntegration">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse gy-md-0 gy-4">
          <div className="col-md-6">
            <div>
              <div className="text-md-start text-center" data-aos="fade-up">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="d-flex flex-column gap-md-4 gap-3">
                <p>
                  Cryptocurrency payment integration with Gamingpe is becoming
                  increasingly popular as businesses seek to offer diverse
                  payment options and cater to tech-savvy customers. By
                  integrating cryptocurrency payments, companies can facilitate
                  transactions using digital currencies like Bitcoin, Ethereum,
                  USDT and others, without the need for traditional
                  intermediaries such as banks.
                </p>
                <p>
                  This integration offers several benefits, including faster
                  transaction processing, lower fees, and enhanced security
                  through blockchain technology. Additionally, it opens up
                  global markets, allowing businesses to accept payments from
                  customers worldwide without worrying about currency conversion
                  or international transaction fees.
                </p>
                <p>
                  To implement cryptocurrency payments, businesses typically use
                  specialized payment gateways that support digital currencies.
                  These gateways provide the necessary infrastructure to
                  authorize and process transactions, ensuring compliance with
                  regulatory requirements and offering features like fraud
                  prevention and dispute resolution. Overall, integrating
                  cryptocurrency payments can provide businesses with a
                  competitive edge, attract a broader customer base, and
                  streamline the payment process, making it more efficient and
                  cost-effective.
                </p>
              </div>
              {/* <div>
                <Link className="hover1" to={"/gamingpe/pricing"}>
                  Get Started
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <figure
              className="position-relative d-flex justify-content-center align-items-center CryptoCurrency"
              data-aos="zoom-in-up"
            >
              <img src={image} alt="pricing_Img" data-aos="zoom-in-up"  style={{width: "100%"}}/>
            </figure> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoCurrencyPage;

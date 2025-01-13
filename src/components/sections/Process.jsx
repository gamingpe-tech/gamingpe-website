import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProcessCard from "./utils/ProcessCard";
import { sectionData } from "../../mockData/sectionData";
import { processCardsData } from "../../mockData/processData";

const Process = () => {
  const { title, description, imagembl, cards } = sectionData.process;

  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(
        (prevCard) => (prevCard + 1) % Object.values(cards).length
      );
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(interval);
  }, [cards]);

  return (
    <section className="Process">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse gy-md-0 gy-5">
          <div className="col-md-6">
            <figure className="position-relative d-flex justify-content-center align-items-center" data-aos="zoom-in-up">
              <img
                className="position-relative z-1"
                src={imagembl}
                alt="ProcessImg"
              />
               <div className="card-container1">
                {Object.values(cards).map((card, index) => (
                  <div
                    key={index}
                    className={`card ${
                      index === currentCard ? "active" : "hidden"
                    }`}
                    style={{
                      backgroundColor: `transparent`,
                      boxShadow: "none",
                      borderColor: `transparent`,
                    }}
                  >
                    {/* Front Side */}
                    <div
                      className="card-front"
                      style={{
                        backgroundImage: `url(${card})`, // Current card image on the front
                        backgroundColor: `transparent`,
                      }}
                    ></div>

                    {/* Back Side */}
                    <div
                      className="card-back"
                      style={{
                        backgroundImage: `url(${
                          cards[(index + 1) % cards.length] // Next card image on the back
                        })`, // Next card
                        backgroundColor: `transparent`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </figure>
          </div>
          <div className="col-md-6">
            <div data-aos="fade-up">
              <div className="text-md-start text-center">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="d-flex gap-4 flex-column mb-md-4">
                {processCardsData.map((card, index) => (
                  <ProcessCard
                    key={index}
                    img={card.img}
                    imgAlt={card.imgAlt}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
              {/* <div className="d-md-block d-flex justify-content-center">
                <Link className="hover1 mt-md-3" to="/gamingpe/features">
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

export default Process;

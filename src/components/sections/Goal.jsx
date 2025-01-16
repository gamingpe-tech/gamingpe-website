import React, { useState } from "react";
import GoalCard from "../sections/utils/GoalCard";
import { goalData } from "../../mockData/goalData";
import { sectionData } from "../../mockData/sectionData";

const Goal = () => {
  const { title, description } = sectionData.goal;
  const [expandedCard, setExpandedCard] = useState(null); // State to manage expanded card

  const handleCardToggle = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <section className="Goal">
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center text-center flex-column mx-auto"
          data-aos="fade-up"
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="row gy-md-0 gy-4" style={{ paddingTop: "8rem" }}>
          {goalData.map((goal, index) => (
            <div className="col-md-6" key={index} style={{ marginBottom: "6rem" }}>
              <GoalCard
                img={goal.img}
                title={goal.title}
                description={goal.description}
                isExpanded={expandedCard === index} // Pass whether this card is expanded
                onToggle={() => handleCardToggle(index)} // Pass toggle handler
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goal;

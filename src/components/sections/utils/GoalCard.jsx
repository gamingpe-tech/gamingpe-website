import React, { useState } from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

const GoalCard = ({ img, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <div
      className="Goal_Card d-flex justify-content-center align-items-center flex-column text-center"
      data-aos="flip-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure className="d-flex justify-content-center align-items-center">
        <img src={img} alt="goal_Img" />
      </figure>
      <h4>{title}</h4>
      <Collapse
        bordered={false}
        activeKey={isExpanded ? ["1"] : []}
        style={{ width: "100%" }}
        motion={{
          motionName: "custom-hover-motion",
          motionAppear: true,
          motionEnter: true,
          motionLeave: true,
          onAppearStart: () => ({ height: 0 }),
          onEnterStart: () => ({ height: 0 }),
          onLeaveStart: (node) => ({ height: node.offsetHeight }),
          motionLeaveEnd: () => ({ height: 0 }),
        }}
      >
        <Panel header={null} key="1" showArrow={false}>
          <p className="Goal_Card_description">{description}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default GoalCard;

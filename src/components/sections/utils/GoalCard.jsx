import React from "react";
import { Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const GoalCard = ({ img, title, description, isExpanded, onToggle }) => {
  return (
    <div
      className="Goal_Card d-flex justify-content-center align-items-center flex-column text-center"
      data-aos="flip-left"
    >
      <figure className="d-flex justify-content-center align-items-center">
        <img src={img} alt="goal_Img" />
      </figure>
      <h4>{title}</h4>
      <div className="collapse-toggle" onClick={onToggle}>
      {isExpanded ? (
          <div style={{display:"flex",alignItems:"center"}}
          >
            <span className="ml-2" style={{color: "#41ae49",fontSize:"12px"}}>Close</span>
            <UpOutlined
              style={{ width: "12px", height: "10px", color: "#41ae49" ,marginLeft:"10px"}}
            />
          </div>
        ) : (
          <div style={{display:"flex",alignItems:"center"}} 
          className="animated-arrow bounce"
          >
              <span className="ml-2" style={{color: "#41ae49",fontSize:"12px"}}>Read More</span>
            <DownOutlined
              style={{ width: "12px", height: "10px", color: "#41ae49", marginLeft:"10px"}}
            />
          </div>
        )}
      </div>
      <Collapse
        bordered={false}
        activeKey={isExpanded ? ["1"] : []}
        style={{ width: "100%" }}
      >
        <Panel
          header={null}
          key="1"
          showArrow={false}
          style={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
          }}
        >
          <p className="Goal_Card_description">{description}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default GoalCard;

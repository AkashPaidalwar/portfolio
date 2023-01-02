import React from "react";
import "./Skill.css";

export default function Skill({ skillData }) {
  return (
    <div className="skillContainer">
      <div className="skillContent">
        <div className="skillLogoContainer">
          <img src={skillData.image} alt="" className="skillLogo"></img>
        </div>
        <div className="textContainer">
          <p className="skillTitle">{skillData.title}</p>
          <p className="skillDescription">{skillData.description}</p>
        </div>
      </div>
    </div>
  );
}

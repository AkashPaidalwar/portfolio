import React from "react";
import "./Experties.css";
import Skill from "./Skill";
import skillsData from "../SkillsData";

export default function Experties() {
  return (
    <div className="expertiesContainer" id="mySkillsPage">
      <div className="titleSection">
        <p className="mySkills">My Skills</p>
      </div>
      <div className="skillSection">
        {skillsData.skills.map((item) => {
          return <Skill skillData={item} />;
        })}
      </div>
    </div>
  );
}

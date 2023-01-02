import React from "react";
import Project from "./Project";
import projectsData from "../ProjectsData";
import "./Portfolio.css";
export default function Portfolio() {
  return (
    <div className="PortfolioContainer" id="Portfolio">
      <div className="headerSection">
        <p className="myPortfolioText">Recent Projects</p>
      </div>
      <div className="contentSection">
        {projectsData.projects.map((item) => {
          return <Project project={item} />;
        })}
      </div>
    </div>
  );
}

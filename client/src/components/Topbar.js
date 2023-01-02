import React from "react";
import "./Topbar.css";
import myLogo from "../Project_Images/Logo/logo.JPG";

export default function Topbar() {
  return (
    <div className="mainContainer" id="Topbar">
      <div className="firstContainer">
        <img src={myLogo} alt="" className="myLogo" />{" "}
      </div>
      <div className="ULContainer">
        <ul className="completeList">
          <li className="ListItem">
            <a className="anchorTags" href="#top">
              Home
            </a>
          </li>
          <li className="ListItem">
            <a className="anchorTags" href="#mySkillsPage">
              My Skills
            </a>
          </li>
          <li className="ListItem">
            <a className="anchorTags" href="#AboutMe">
              About me
            </a>
          </li>
          <li className="ListItem">
            <a className="anchorTags" href="#Portfolio">
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div className="buttonContainer">
        <a className="contactMeButtonTopbar" href="#ContactMe">
          Contact Me
        </a>
      </div>
    </div>
  );
}

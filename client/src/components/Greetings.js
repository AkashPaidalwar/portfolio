import React from "react";
import "./Greetings.css";
export default function Greetings() {
  return (
    <div id="Home" className="Header">
      <div className="headerLeft">
        <div className="Content">
          <h2 className="heyText">Hey, I am Akash</h2>
          <div className="roleContainer">
            <div className="text">I am a</div>
            <div className="ULContainer">
              <ul className="options">
                <li>
                  <span>FULLSTACK DEVELOPER</span>
                </li>
                <li>
                  <span>TECH LOVER</span>
                </li>
                <li>
                  <span>AGILE LEARNER</span>
                </li>
                <li>
                  <span>MERN DEVELOPER</span>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="descriptionText">
            Self learned web developer with the knowledge of latest technologies
            like React, NodeJS and MongoDB and JavaScript and able to quickly
            adapt to this fast changing world.
          </h2>
          <h2 className="descriptionText">
            Proficient in building beautiful and user friendly frontend and
            building a smart backend to interact with it.
          </h2>
          <h2 className="descriptionText">
            I love to code and am looking for an exciting opportunity to be a
            part of an excellent organisation as a web developer to contribute
            using my web development skills.
          </h2>
        </div>
        <div className="Actions">
          <a
            className="getInTouchButtonGreetings"
            href="https://drive.google.com/uc?export=download&id=0B_X9KPi0L0dSVDBZaDlJcDI5cjBYRVNmaE8wU0cyN1A0aWdV"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="profilePicrureContainer">
        <img src="https://www.linkpicture.com/q/TP.jpg" alt="" className="ProfileImage" />
      </div>
    </div>
  );
}

import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutMeContainer" id="AboutMe">
      <div className="imageContainer">
        <img
          className="aboutMeImage"
          src="https://cdn.filestackcontent.com/dUpeb5gxSG3N0km3fsH8"
          alt=""
        />
      </div>
      <div className="detailsContainer">
        <p className="title">About Me</p>
        <p className="description">I am Akash Paidalwar,</p>
        <p className="description">
          Graduated in 2011 as a Mechanical Engineer from Government College of
          Engineering Amravati. I started my career as a software developer for
          a year at Desault Systems before moving for masters in Product Design
          at NIT Warangal. I have been a product designer ever since. I have
          been working for one of the biggest home appliance manufacturer in the
          world, Whirlpool Corporation for a major part of my career (2015-2021)
          as a project engineer, designing Washing machines and responsible for
          the manufacturing of plastic components. I made a transition to Oil
          and Gas industry as a Mechanical Engineer at the biggest Oil and Gas
          service provider on the planet, Schlumberger Corporation and am
          responsible for design and development of the oil extraction
          equipments. I do love how my current job pushes me to think critically
          and bring out the logical solution to the problem at hand.
        </p>
        <p className="description">
          As exciting as it sounds, I guess its time I look forward for new
          challanges and opportunities. I have been in love with coading for
          many years and have been developing some small application every now
          and then to automate my day to day activities on job. Rescently I came
          across web development and fell in love with it. I started self study
          and learned to build beautiful and complex front ends along with
          efficient and intelligent backend applications. after a consistant
          efforts put in place every signle day for months I was able to achieve
          proficiency in the above listed skills. Please have a look at some of
          my projects below. I hope you find them interesting.
        </p>
      </div>
    </div>
  );
}

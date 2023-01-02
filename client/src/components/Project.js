import React from "react";
import "./Project.css";
export default function Project({ project }) {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const autoChangeSlide = () => {
    setTimeout(() => {
      setSlideIndex(slideIndex === 3 ? 0 : slideIndex + 1);
    }, 2000);
  };
  autoChangeSlide();

  return (
    <div className="projectCard">
      <div className="projectImageContainer" id="projectImageContainer">
        {project.projectImage.map((item) => {
          return (
            <img
              className="projectImage"
              src={item}
              alt=""
              style={{
                transform: `translateX(${-slideIndex * 100}%)`,
                animation: `translate 2s infinite`,
              }}
            />
          );
        })}
      </div>
      <div className="cardContent">
        <p className="projectTitle">{project.title}</p>
        <p className="projectDetails">{project.description}</p>
        <p className="SkillsUsed">
          <span className="skillsUsedSpan">Skills Used:</span> {project.skills}
        </p>
      </div>
      <div className="buttonsContainer">
        <a
          className="ProjectButton"
          href={project.websiteLink}
          target="_blank"
          rel="noreferrer"
        >
          Visit Website
        </a>
        <a
          className="ProjectButton"
          href={project.videoLink}
          target="_blank"
          rel="noreferrer"
        >
          Watch Video
        </a>
        <a
          className="ProjectButton"
          href={project.APILink}
          target="_blank"
          rel="noreferrer"
        >
          Visit API
        </a>
        <a
          className="ProjectButton"
          href={project.GitHub}
          target="_blank"
          rel="noreferrer"
        >
          Git Hub Repository
        </a>
      </div>
    </div>
  );
}

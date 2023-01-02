import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import myLogo from "../Project_Images/Logo/logo.JPG";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="footerLogoContainer">
          <img src={myLogo} alt="" className="logoimage" />
        </div>
        <div className="footerLinksContainer">
          <ul className="footerUL">
            <li className="footerLinkListItem">
              <a className="footerLinkAnchor" href="#top">
                Home
              </a>
            </li>
            <li className="footerLinkListItem">
              <a className="footerLinkAnchor" href="#mySkillsPage">
                My Skills
              </a>
            </li>
            <li className="footerLinkListItem">
              <a className="footerLinkAnchor" href="#AboutMe">
                About me
              </a>
            </li>
            <li className="footerLinkListItem">
              <a className="footerLinkAnchor" href="#Portfolio">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div className="footerSocialsContainer">
          <a
            className="socialIconLinks"
            href="https://github.com/AkashPaidalwar"
            target="_blink"
          >
            <FontAwesomeIcon className="socialIcons" icon={faSquareGithub} />
          </a>
          <a
            className="socialIconLinks"
            href="https://www.facebook.com/paidalwar.akash"
            target="_blink"
          >
            <FontAwesomeIcon className="socialIcons" icon={faFacebook} />
          </a>
          <a
            className="socialIconLinks"
            href="https://twitter.com/"
            target="_blink"
          >
            <FontAwesomeIcon className="socialIcons" icon={faTwitter} />
          </a>
          <a
            className="socialIconLinks"
            href="https://www.linkedin.com/in/akash-paidalwar-456238b0/"
            target="_blink"
          >
            <FontAwesomeIcon className="socialIcons" icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className="creditsContainer">
        <p className="madeBy">E-mail: paidalwar.akash@gmail.com</p>
        <p className="madeBy">Ph: 9923525658</p>
      </div>
    </div>
  );
}

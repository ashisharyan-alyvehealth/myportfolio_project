import React from "react";
import SocialContact from "../../common/social-contact/SocialContact";
// import SocialContact from "../../common/social-contact";
import "./about.css";
function Abouts() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">a Front-end Engineer</span>.<br /> I love developing
          Android and web Applications
        </div>
        <div className="about-photo">
          <img
             src={require("./coding.png").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact/>
    </div>
  );
}
export default Abouts;

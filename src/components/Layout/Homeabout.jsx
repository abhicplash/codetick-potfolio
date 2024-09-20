import React from "react";
import "./Homeabout.css";
import aboutimage from "../../assets/owenabout.jpg";
// import image from "../../assets/owen.jpg";
import { skillset } from "../../utils/data";
// import skillset from '../../utils/data'

const Homeabout = () => {
  return (
    <div className="homeab">
      <div className="Homeabout-container">
        <div className="home-left">
          <h2>
            About <span className="secondWord">Me</span>{" "}
          </h2>
          <p>
            Results-driven React Front End Developer with 3+ years of experience
            in building scalable, efficient UI/UX. Expertise in JavaScript
            (ES6+), HTML5, CSS3, React, Redux, and modern front-end libraries.
            Strong understanding of responsive design, accessibility, and
            performance optimization. Experience with state management, API
            integrations, and testing frameworks. Collaborative team player with
            excellent problem-solving skills and attention to detail. Committed
            to delivering high-quality solutions that exceed client
            expectations.
          </p>
          <div className="skillSet">
            {skillset.map(list =>
              <div className="skill">
                <h3>
                  {list.Image}
                </h3>
                <h5>
                  {list.skill}
                </h5>
                {/* <p className="skillicon"> */}
                {/* <h2>
                </h2> */}
                {/* </p> */}
              </div>
            )}
          </div>
        </div>
        <div className="home-right">
          <img src={aboutimage} alt="" className="homeabout-image" />
        </div>
      </div>
    </div>
  );
};

export default Homeabout;

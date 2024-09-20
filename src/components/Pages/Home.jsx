import React from "react";
import Layout from "../Layout/Layout";
import "./Home.css";
import image from "../../assets/owen.jpg";
import cv from "../../assets/cv.pdf";
import Homecontact from "../Layout/Homecontact";
import Homeabout from "../Layout/Homeabout";

const Home = () => {
  return (
    <Layout>
      <div className="Home-container">
        <div className="home-left">
          <h1>
            <span className="homename-pre">Welcome I`m</span>
            <br />
            Owen <span>Pierce</span> <br />
            <span className="homename-post">Frontend Developer</span>
            <br />
          </h1>
          <p>
            Passionate and detail-oriented frontend developer with expertise in
            modern web technologies. Skilled in building responsive, scalable,
            and user-centric applications using React, JavaScript, HTML, and
            CSS. Dedicated to writing clean, maintainable code while optimizing
            performance. Eager to innovate and collaborate in dynamic team
            environments to deliver impactful solutions
          </p>
          <a href={cv} download>
            <button>Resume</button>
          </a>
        </div>
        <div className="home-right">
          <img src={image} alt="" className="home-image" />
        </div>
      </div>
      <Homeabout />
      <Homecontact />
    </Layout>
  );
};

export default Home;

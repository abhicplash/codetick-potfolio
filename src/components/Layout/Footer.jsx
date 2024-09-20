import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <h2>Owen Pierce</h2>
      <p>
        Expert React Front End Developer crafting responsive, scalable UI/UX.
        Building seamless digital experiences with JavaScript, HTML5, and CSS3.
      </p>
      <div className="links">
        <FaInstagram className="footer-icons" />
        <FaFacebookSquare className="footer-icons" />
        <FaWhatsapp className="footer-icons" />
        <FaLinkedin className="footer-icons" />
      </div>
    </div>
  );
}

export default Footer;

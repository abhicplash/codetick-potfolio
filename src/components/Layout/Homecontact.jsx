import React from "react";
import "./Homecontact.css";

const Homecontact = () => {
  return (
    <div className="home-contact-container">
      <h3>
        Contact <span className="secondWord">Me</span>{" "}
      </h3>
      <h2>Feel free to contact</h2>
      <div className="details">
        <div className="contact-left">
          <div className="contact-details">
            <h2>Personal Information</h2>
            Address <span className="secondWord">Noida ,UP</span>
            Mobile <span className="secondWord">+91-9562465095</span>
            Mail-ID <span className="secondWord">owenp@gmail.com</span>
          </div>
        </div>
        <div className="contact-right">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Contact" />
          <textarea name="" id="" placeholder="Your Message" />
          <button> Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Homecontact;

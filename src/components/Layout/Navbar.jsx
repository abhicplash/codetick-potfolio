import React, { useState } from "react";
import "./Navbar.css";
// import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [view, setView] = useState(false);
  const visibileMenu = () => {
    setView(!view);
  };
  return (
    <div className="navbar-container">
      <h2>Owen Pierce</h2>
      <RxHamburgerMenu
        onClick={() => {
          visibileMenu();
        }}
        className="nav-icon"
      />
      <div className="navlist1">
        <Link to={"/"}>
          <h3>home</h3>
        </Link>

        <Link to={"/about"}>
         <h3>About</h3>
        </Link>
        {/* <h3>Service</h3> */}
        <Link to={"/contact"}>
          <h3>Contact</h3>
        </Link>
      </div>
      {view
        ? <div className="navlist">
            <Link to={"/"}>
              <h3>home</h3>
            </Link>
            <Link to={"/about"}>
             <h3>About</h3>
            </Link>
            {/* <h3>Service</h3> */}
            <Link to={"/contact"}>
              <h3>Contact</h3>
            </Link>
          </div>
        : null}
    </div>
  );
};

export default Navbar;

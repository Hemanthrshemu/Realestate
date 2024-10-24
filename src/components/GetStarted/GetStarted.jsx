import React from "react";
import "./GetStarted.css";
import Footer from "../Footer/Footer";
const GetStarted = () => {
  return (
    <div id="get" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Safe</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button" href>
            <a href="mailto:hemanthrshemu@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default GetStarted;
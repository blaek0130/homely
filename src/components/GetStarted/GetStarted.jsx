import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homely</span>
          <span className="secondaryText">
            Subscribe and get updates on all the latest housing
            <br />
            Find your new home soon
          </span>
          <button className="button">
            <a href="mailto:test@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

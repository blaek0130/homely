import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/**left Side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
            <br />
          <span className="secondaryText">
            Our vision is to find a home <br /> fit for everyone.
          </span>
        </div>

        {/**right Side */}
        <div className="flexColStart f-right">
        <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 4571, USA</span>
          <span className="secondaryText">145 123 186 23</span>
          <br />
          <span>Property</span>
          <span>Services</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Banner = () => {
  return (
    <Router>
      <div className="banner">
        <div className="banner-wrapper global-wrapper">
          <h5>Information for Travellers During COVID-19</h5>
          <ul>
            <li>
              <img src="/assets/ITG.png" alt="" />
              <Link exact className="banner-links" to="/">
                International Traveller’s Guide
              </Link>
            </li>
            <li>
              <img src="/assets/TR.png" alt="" />
              <Link exact className="banner-links" to="/">
                Travel Restrictions
              </Link>
            </li>
            <li>
              <img src="/assets/AP.png" alt="" />
              <Link exact className="banner-links" to="/">
                Airline Policies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
};

export default Banner;

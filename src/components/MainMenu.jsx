import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="main-menu global-wrapper">
      <Router>
        <nav>
          <ul>
            <li>
              <Link className="menu-links" to="/">
                Hotels
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/">
                Flights
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/">
                Trains
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/">
                Cars
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/">
                Tours & Tickets
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/">
                Attractions
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/">
                Trip.com Rewards
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/">
                Deals
              </Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
};

export default MainMenu;

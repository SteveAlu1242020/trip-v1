import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import HotelSearch from "./container/HotelSearch";
import FlightSearch from "./container/FlightSearch";
import TrainSearch from "./container/TrainSearch";
import CarSearch from "./container/CarSearch";
import TourSearch from "./container/TourSearch";

import {
  FaRegBuilding,
  FaPlane,
  FaTrain,
  FaCar,
  FaTicketAlt,
  FaChevronDown,
  FaInfoCircle,
  FaRegStar,
} from "react-icons/fa";

const ServiceMenu = () => {
  const [background, setBackground] = useState({});

  return (
    <div className="service-menu">
      <div className="service-menu-wrapper">
        <Router>
          <Switch>
            <nav>
              <ul>
                <li>
                  <NavLink
                    exact
                    to="/"
                    className="service-links"
                    activeClassName="active">
                    <FaRegBuilding className="link-icons" />
                    Hotels
                  </NavLink>
                </li>
                <Route exact path="/" component={HotelSearch} />
                <li>
                  <NavLink
                    to="/flights"
                    className="service-links"
                    activeClassName="active">
                    <FaPlane className="link-icons" />
                    Flights
                  </NavLink>
                </li>
                <Route exact path="/flights" component={FlightSearch} />
                <li>
                  <NavLink
                    to="/trains"
                    className="service-links"
                    activeClassName="active">
                    <FaTrain className="link-icons" />
                    Trains
                  </NavLink>
                </li>
                <Route exact path="/trains" component={TrainSearch} />
                <li>
                  <NavLink
                    to="/cars"
                    className="service-links"
                    activeClassName="active">
                    <FaCar className="link-icons" />
                    Cars
                  </NavLink>
                </li>
                <Route exact path="/cars" component={CarSearch} />
                <li>
                  <NavLink
                    to="/tours-and-tickets"
                    className="service-links"
                    activeClassName="active">
                    <FaTicketAlt className="link-icons" />
                    Tours & Tickets
                  </NavLink>
                </li>
                <Route exact path="/tours-and-tickets" component={TourSearch} />
              </ul>
            </nav>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default ServiceMenu;

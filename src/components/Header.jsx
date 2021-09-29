import React from "react";
import ServiceMenu from "./ServiceMenu";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

import HotelSearch from "../components/container/HotelSearch";
import FlightSearch from "../components/container/FlightSearch";
import TrainSearch from "../components/container/TrainSearch";
import CarSearch from "../components/container/CarSearch";
import TourSearch from "../components/container/TourSearch";

const Header = () => {
  const locationURL = window.location.href;
  const baseURL = "http://localhost:3000";

  return (
    <div className="header">
      <div className="arc-wrapper"></div>
      <div className="header-wrapper global-wrapper">
        <div className="service-wrapper">
          <ServiceMenu />
          {/* <Router>
            <Switch>
              <Route exact path="/" component={HotelSearch} />
              <Route path="/flights" component={FlightSearch} />
              <Route path="/trains" component={TrainSearch} />
              <Route path="/cars" component={CarSearch} />
              <Route path="/tours-and-tickets" component={TourSearch} />
            </Switch>
          </Router> */}

          {/* <Router>
           <Switch> */}

          {/* <div className="additional-filter-wrapper">
         <div className="checkbox-wrapper d-flex-sb">
           <input type="checkbox" name="for-work" value="" />
           <p style={{ margin: "0 0.30rem", fontSize: "0.95rem" }}>
             I'm traveling for work
           </p>
           <FaInfoCircle />
         </div>
         <div className="rating-wrapper d-flex-sb">
           <p>Star Rating</p>
           <div className="rating-box">
             <p>{`< 2`}</p>
             <FaRegStar />
           </div>
           <div className="rating-box">
             <p>{`3`}</p>
             <FaRegStar />
           </div>
           <div className="rating-box">
             <p>{`4`}</p>
             <FaRegStar />
           </div>
           <div className="rating-box">
             <p>{`5`}</p>
             <FaRegStar />
           </div>
         </div>
       </div>         */}

          {/* </Switch>
          </Router> */}
        </div>
        <div className="client-wrapper">
          {/* <p>rating</p>
          <p>We're here 24x7</p>
          <p>Get rewarded for traveling</p> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

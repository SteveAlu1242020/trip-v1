import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  FaSearch,
  FaMobileAlt,
  FaCaretDown,
  FaGlobe,
  FaUserCircle,
  FaBitcoin,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <Router>
      <div className="top-bar global-wrapper">
        <div className="top-bar-wrapper d-flex-sb">
          <div className="top-bar-left d-flex-sb">
            <div className="logo">
              <Link exact to="/">
                <img src="/assets/logo.png" alt="" srcset="" />
              </Link>
            </div>
            <div className="search-box-wrapper">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Destination, attraction, hotel, etc"
                className="search-input"
              />
              <button className="search-button">
                <FaSearch className="fa-search" size="1rem" />
              </button>
            </div>
          </div>
          <div className="top-bar-right d-flex-sb">
            <div className="top-bar-right-blocks">
              <FaMobileAlt size="1rem" className="fa-icons" />
              App
            </div>
            <div className="top-bar-right-blocks">
              Help
              <FaCaretDown size="1rem" className="fa-icons" />
            </div>
            <span style={{ color: "lightGrey" }}>|</span>
            <div className="top-bar-right-blocks">
              <FaGlobe color="#2681ff" size="1rem" className="fa-icons" />
              <FaCaretDown size="1rem" className="fa-icons" />
            </div>
            <div className="top-bar-right-blocks">
              USD
              <FaCaretDown size="1rem" className="fa-icons" />
            </div>
            <span style={{ color: "lightGrey" }}>|</span>
            <div className="top-bar-right-blocks">
              <FaUserCircle
                color="#2681ff"
                size="1.5rem"
                className="fa-icons"
              />
              <h4>
                Hi <span>Stephen J Samuel!</span>
              </h4>
              <FaCaretDown size="1rem" className="fa-icons" />
            </div>
            <div className="top-bar-right-blocks">
              <FaBitcoin color="gold" size="1.25rem" className="fa-icons" />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default TopBar;

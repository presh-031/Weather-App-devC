import React from "react";

import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import shower from "../../assets/Shower.png";

import "./Aside.css";

const Aside = () => {
  return (
    <div className="Aside">
      <div>
        <input type="text" placeholder="Search for places" />
        <div className="geo"></div>
      </div>
      <div className="cloud-with-bg">
        <div>
          <img src={shower} alt="" />
        </div>
      </div>
      <div className="temperature-div">
        <p>
          <span className="temperature">15</span>{" "}
          <span className="temperature-unit">
            <span>&deg;</span>C
          </span>
        </p>
      </div>
      <div className="weather-condition-div">
        <p>Shower</p>
      </div>
      <p className="date">Today &middot; Fri, 5 Jun</p>
      <div className="location-div">
        <IconContext.Provider value={{ color: "#88869D", className: "location-icon" }}>
          <MdLocationOn />
        </IconContext.Provider>
        <p>Helsinki</p>
      </div>
    </div>
  );
};

export default Aside;

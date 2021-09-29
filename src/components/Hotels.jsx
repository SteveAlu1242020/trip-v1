import React, { useState, useEffect } from "react";
import axios from "axios";

const Hotels = () => {
  const [hotelInfo, setHotelInfo] = useState([]);
  const [place, setPlaceHandler] = useState("shanghai");

  useEffect(() => {
    axios(`https://trip-hotel-v1.herokuapp.com/api/v3/${place}`)
      .then((res) => setHotelInfo(res.data))
      .catch((err) => console.log(err));
  }, [place]);

  const menuHandler = (val) => {
    setPlaceHandler(val);
  };

  return (
    <div className="hotels">
      <div className="hotels-title">
        <h1>Recommended Hotels</h1>
      </div>
      <div className="hotels-menu">
        <div className="button-wrapper">
          <button
            onClick={() => {
              menuHandler("shanghai");
            }}>
            Shanghai
          </button>
          <button
            onClick={() => {
              menuHandler("sanya");
            }}>
            Sanya
          </button>
          <button
            onClick={() => {
              menuHandler("beijing");
            }}>
            Beijing
          </button>
          <button
            onClick={() => {
              menuHandler("macau");
            }}>
            Macau
          </button>
          <button
            onClick={() => {
              menuHandler("shenzhen");
            }}>
            Shenzhen
          </button>
          <button
            onClick={() => {
              menuHandler("dubai");
            }}>
            Dubai
          </button>
          <button
            onClick={() => {
              menuHandler("hong-kong");
            }}>
            Hong Kong
          </button>
          <button
            onClick={() => {
              menuHandler("yangshuo");
            }}>
            Yangshuo
          </button>
        </div>
      </div>
      <div className="hotel-component d-flex-sb">
        {hotelInfo.map((res) => {
          return (
            <div className="hotel-component-info">
              <div className="items">
                <div className="items-img">
                  <img
                    src={res.imageUrl}
                    alt=""
                    style={{ width: "100%" }}></img>
                </div>
                <div className="items-info">
                  <div className="items-info-wrapper">
                    <h4>{res.title}</h4>
                    <p>Stars: {res.rating.stars}</p>
                    <div className="d-flex">
                      <div className="average-wrapper">
                        <p>
                          <b>{res.rating.average}</b>/5
                        </p>
                      </div>
                      <p>{res.rating.reviewCount} Reviews</p>
                    </div>
                    <p>
                      From{" "}
                      <span style={{ fontWeight: "bold", color: "#287dfa" }}>
                        US${res.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;

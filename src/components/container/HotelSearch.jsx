import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  createContext,
} from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

import {
  FaRegBuilding,
  FaPlane,
  FaTrain,
  FaCar,
  FaTicketAlt,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle,
  FaRegStar,
} from "react-icons/fa";
import CalendarComponent from "./calendar/CalendarComponent";
import RGComponent, { RoomCount } from "./r-and-g/RGComponent";

const initialState = {
  background: "#f0f2f5",
  color: "#0f294d",
};

const falconColors = {
  background: "#ff9500",
  color: "#ffffff",
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "BG_COLOR":
      return falconColors;

    default:
      return currentState;
  }
};

export const RoomAdultDetails = createContext();
export const CalendarInfoContext = createContext();

const HotelSearch = () => {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef1_ = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  // const blurStyle = "1.5px solid #f0f2f5";
  const blurStyle = "#f0f2f5";
  const clickStyle = "2px solid #2681ff";

  const [state, dispatch] = useReducer(reducer, initialState);

  const [condition, setCondition] = useState(true);
  const [condition_1, setCondition_1] = useState(true);
  const [condition_2, setCondition_2] = useState(true);
  const [condition_3, setCondition_3] = useState(true);

  const ratingStyleHandler = () => {
    dispatch({ type: "BG_COLOR" });
    setCondition(!condition);
  };
  const ratingStyleHandler1 = () => {
    dispatch({ type: "BG_COLOR" });
    setCondition_1(!condition_1);
  };
  const ratingStyleHandler2 = () => {
    dispatch({ type: "BG_COLOR" });
    setCondition_2(!condition_2);
  };
  const ratingStyleHandler3 = () => {
    dispatch({ type: "BG_COLOR" });
    setCondition_3(!condition_3);
  };

  //

  //Destination/Hotel
  // const [dhValue, setDhValue] = useState();
  const [dhInput, setDhInput] = useState();

  //

  const dropDownWrapperRef = useRef(null);
  const [toggle, setToggle] = useState(true);

  const checkInRef = useRef(null);

  //Destination/Hotel
  const dhToggleClickHandler = () => {
    // setToggle(!toggle);
    // toggle === true
    //   ? (dropDownWrapperRef.current.style.display = "block")
    //   : (dropDownWrapperRef.current.style.display = "none");
    dropDownWrapperRef.current.style.display = "block";
    inputRef.current.style.borderBottom = clickStyle;
  };

  // const dhToggleBlurHandler = () => {
  // setToggle(!toggle);
  // toggle === true
  //   ? (dropDownWrapperRef.current.style.display = "block")
  //   : (dropDownWrapperRef.current.style.display = "none");
  //   inputRef.current.style.borderBottomColor = blurStyle;
  // };\

  const calendarWrapper = useRef(null);

  const rgDown = useRef(null);
  const rgUp = useRef(null);

  const [roomNW, setRoomNW] = useState(1);
  const [adultNW, setAdultNW] = useState(1);
  const [childrenNW, setChildrenNW] = useState(0);

  const rgComponent = useRef(null);
  const childAgeSelect = useRef(null);
  const childrenDescription = useRef(null);

  // ******************************************* CALENDAR COMPONENT START *************************************
  // const dateToday = new Date().getDate() + 1;
  const [calendarCheckIn, setCalendarCheckIn] = useState(new Date());
  // const [calendarCheckOut, setCalendarCheckOut] = useState(
  //   new Date().getDate() + 1
  // );

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  let addDaysHandler = addDays(new Date(), 1);

  const [calendarCheckOutSub, setCalendarCheckOutSub] =
    useState(addDaysHandler);

  let totalDays = calendarCheckOutSub.getDate() - calendarCheckIn.getDate();
  let checkInGetDay = calendarCheckIn.getDay();
  let checkOutGetDay = calendarCheckOutSub.getDay();
  let checkInGetDate = calendarCheckIn.getDate();
  let checkOutGetDate = calendarCheckOutSub.getDate();
  let checkInGetMonth = calendarCheckIn.toLocaleString("default", {
    month: "short",
  });
  let checkOutGetMonth = calendarCheckOutSub.toLocaleString("default", {
    month: "short",
  });

  let weekDayHandler = (val) => {
    switch (val) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
      default:
    }
  };

  let checkInGetDayHandler = weekDayHandler(checkInGetDay);
  let checkOutGetDayHandler = weekDayHandler(checkOutGetDay);
  // ******************************************* CALENDAR COMPONENT END *************************************

  return (
    <div className="hotel-search">
      <form action="">
        <div className="input-wrapper">
          <div
            className="input-block"
            ref={inputRef}
            style={{ maxWidth: "15.625rem" }}>
            <label>Destination/Hotel Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="City, airport, region, landmark"
              onBlur={() => {
                inputRef.current.style.borderBottomColor = blurStyle;
                // setToggle(!toggle);
                // toggle === true
                //   ? (dropDownWrapperRef.current.style.display = "block")
                //   : (dropDownWrapperRef.current.style.display = "none");
              }}
              onClick={() => {
                dhToggleClickHandler();
                calendarWrapper.current.style.display = "none";
                rgComponent.current.style.display = "none";
              }}
              onChange={(e) => {
                setDhInput(e.target.value);
                dropDownWrapperRef.current.style.display = "none";
                // toggle === true

                // setToggle(!toggle);
                // toggle === true
                //   ? (dropDownWrapperRef.current.style.display = "block")
                //   : (dropDownWrapperRef.current.style.display = "none");
              }}
              style={{ maxWidth: "13.125rem" }}
              // value={dhValue ? dhValue : dhInput}
              value={dhInput}
            />
          </div>

          {/* /////////////////////////// START */}
          <div className="dropdown-wrapper" ref={dropDownWrapperRef}>
            <div className="dropdown-inner">
              <div className="recent-search-wrapper">
                <div className="title">
                  <h5>Recent Searches</h5>
                </div>
                <ul>
                  <li></li>
                </ul>
              </div>
              <div className="popular-wrapper">
                <div className="title">
                  <h5>Popular</h5>
                </div>
                <ul>
                  <li
                    onClick={() => {
                      setDhInput("Shanghai");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Shanghai
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Las Vegas");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Las Vegas
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("New York");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    New York
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Hong Kong");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Hong Kong
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("San Diego");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    San Diego
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Bangkok");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Bangkok
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Tokyo");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Tokyo
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Singapore");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Singapore
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Cancun");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Cancun
                  </li>
                </ul>
              </div>
              <div className="us-and-na-wrapper">
                <div className="title">
                  <h5>United States & North America</h5>
                </div>
                <ul>
                  <li
                    onClick={() => {
                      setDhInput("Las Vegas");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Las Vegas
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("New York");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    New York
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Los Angeles");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Los Angeles
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Toronto");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Toronto
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Atlanta");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.style.focus();
                    }}>
                    Atlanta
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("San Diego");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    San Diego
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Cancun");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Cancun
                  </li>
                  <li
                    onClick={() => {
                      setDhInput("Miami");
                      dropDownWrapperRef.current.style.display = "none";
                      checkInRef.current.focus();
                    }}>
                    Miami
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* /////////////////////////// END */}

          <div
            className="input-block d-flex-sb"
            // ref={inputRef1}
            style={{
              padding: 0,
              borderBottom: "none",
            }}>
            <div
              ref={inputRef1}
              className="input-block-check input-block-date"
              style={{
                paddingRight: "0",
                borderBottom: "1.5px solid #f0f2f5",
                userSelect: "none",
              }}>
              <label>Check-in</label>
              <input
                ref={checkInRef}
                type="text"
                name=""
                id=""
                placeholder="Date"
                value={`${checkInGetDayHandler}, ${checkInGetMonth}, ${checkInGetDate}`}
                style={{
                  maxWidth: "6.5rem",
                  // maxWidth: "7rem",
                  // maxWidth: "9.5rem",
                }}
                // onBlur={() => (inputRef1.current.style.borderBottom = blurStyle)}
                onBlur={() => {
                  inputRef1.current.style.borderBottomColor = "#f0f2f5";
                  // calendarWrapper.current.style.display = "none";
                }}
                onClick={() => {
                  inputRef1.current.style.borderBottom = clickStyle;
                  dropDownWrapperRef.current.style.display = "none";
                  // calendarWrapper.current.style.display = "block";
                }}
                onFocus={() => {
                  inputRef1.current.style.borderBottom = clickStyle;
                  calendarWrapper.current.style.display = "block";
                  rgComponent.current.style.display = "none";
                }}
              />
            </div>
            <div
              className="input-block-check input-block-date"
              style={{
                padding: "28px 15px",
                borderBottom: "1.5px solid #f0f2f5",
              }}>
              <label style={{ whiteSpace: "pre" }}>{totalDays} Nights</label>
              {/* <p>Nights</p> */}
            </div>
            <div
              ref={inputRef1_}
              className="input-block-check input-block-date"
              style={{
                paddingLeft: "0",
                textAlign: "right",
                borderBottom: "1.5px solid #f0f2f5",
                userSelect: "none",
              }}>
              <label>Check-out</label>
              <input
                type="text"
                name=""
                style={{
                  textAlign: "right",
                  maxWidth: "6.5rem",
                  // maxWidth: "7rem",
                  // maxWidth: "9.5rem",
                }}
                id=""
                placeholder="Date"
                value={`${checkOutGetDayHandler}, ${checkOutGetMonth}, ${checkOutGetDate}`}
                // onBlur={() => (inputRef1_.current.style.borderBottom = blurStyle)}
                onBlur={() => {
                  inputRef1_.current.style.borderBottomColor = "#f0f2f5";
                  // calendarWrapper.current.style.display = "none";
                }}
                onClick={() => {
                  inputRef1_.current.style.borderBottom = clickStyle;
                  dropDownWrapperRef.current.style.display = "none";
                }}
                //
                onFocus={() => {
                  // inputRef1.current.style.borderBottom = clickStyle;
                  calendarWrapper.current.style.display = "block";
                  rgComponent.current.style.display = "none";
                }}
              />
            </div>
          </div>

          <div className="calendar-wrapper" ref={calendarWrapper}>
            <CalendarInfoContext.Provider
              value={{
                calendarCheckIn,
                setCalendarCheckIn,
                calendarCheckOutSub,
                setCalendarCheckOutSub,
                totalDays,
                checkInGetDay,
                checkOutGetDay,
                checkInGetDayHandler,
                checkOutGetDayHandler,
                // calendarCheckOut,
                // setCalendarCheckOut,
              }}>
              <CalendarComponent />
            </CalendarInfoContext.Provider>
          </div>

          <div
            className="input-block"
            ref={inputRef2}
            onClick={() => {
              calendarWrapper.current.style.display = "none";
              dropDownWrapperRef.current.style.display = "none";
            }}
            onFocus={() => {
              rgDown.current.style.transform = "scaleY(-1)";
              rgDown.current.style.transformOrigin = "0px 8px";
              // rgUp.current.style.display = "block";
              rgComponent.current.style.display = "block";
            }}
            onBlur={() => {
              rgDown.current.style.transform = "scaleY(1)";
              // rgComponent.current.style.display = "none";
            }}>
            <div className="rg-inner d-flex-sb">
              <div className="rg-inner-input">
                <label>Room and Guests</label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={`${roomNW} ${"Room,"} ${adultNW} ${"Adult,"} ${
                    childrenNW ? childrenNW + " Child" : ""
                  }`}
                  placeholder="Room, Adult"
                  // value={room ? room : adult ? adult : ""}
                  onBlur={() => {
                    inputRef2.current.style.borderBottomColor = blurStyle;
                  }}
                  onFocus={() => {
                    inputRef2.current.style.borderBottom = clickStyle;
                  }}
                />
              </div>
              <div className="rg-inner-arrow">
                <div ref={rgDown}>
                  <FaChevronDown />
                </div>
                {/* <div ref={rgUp} style={{ display: "none" }}>
                  <FaChevronUp />
                </div> */}
                {/* <FaChevronUp ref={rgUp} /> */}
              </div>
            </div>

            <RoomAdultDetails.Provider
              value={{
                adultNW,
                setAdultNW,
                roomNW,
                setRoomNW,
                childrenNW,
                setChildrenNW,
                rgComponent,
                childAgeSelect,
                childrenDescription,
              }}>
              <RGComponent />
            </RoomAdultDetails.Provider>
          </div>
          <div className="input-block" ref={inputRef3}>
            <label>Keywords (Optional)</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Airport, station, hotel name, area"
              onBlur={() =>
                (inputRef3.current.style.borderBottomColor = blurStyle)
              }
              onFocus={() => {
                inputRef3.current.style.borderBottom = clickStyle;
                calendarWrapper.current.style.display = "none";
                dropDownWrapperRef.current.style.display = "none";
                rgComponent.current.style.display = "none";
              }}
            />
          </div>
          <div className="button-block">
            {/* <Router>
              <Switch>
                <Link exact to="/"> */}
            <button className="search-btn-large">
              <FaSearch className="fa-search" size="2rem" />
            </button>
            {/* </Link>
              </Switch>
            </Router> */}
          </div>
        </div>

        <div className="additional-filter-wrapper">
          <div className="checkbox-wrapper d-flex-sb">
            <input
              type="checkbox"
              name="for-work"
              value=""
              style={{ cursor: "pointer" }}
            />
            <p style={{ margin: "0 0.30rem", fontSize: "0.95rem" }}>
              I'm traveling for work
            </p>
            <FaInfoCircle />
          </div>
          <div className="rating-wrapper d-flex-sb">
            <p style={{ marginRight: "7px" }}>Star Rating</p>
            <div
              className="rating-box"
              style={condition === false ? state : { background: "#f0f2f5" }}
              onClick={() => {
                ratingStyleHandler();
              }}>
              <p>{`< 2`}</p>
              <FaRegStar className="rating-icon" />
            </div>
            <div
              className="rating-box"
              style={condition_1 === false ? state : { background: "#f0f2f5" }}
              onClick={() => {
                ratingStyleHandler1();
              }}>
              <p>{`3`}</p>
              <FaRegStar className="rating-icon" />
            </div>
            <div
              className="rating-box"
              style={condition_2 === false ? state : { background: "#f0f2f5" }}
              onClick={() => {
                ratingStyleHandler2();
              }}>
              <p>{`4`}</p>
              <FaRegStar className="rating-icon" />
            </div>
            <div
              className="rating-box"
              style={condition_3 === false ? state : { background: "#f0f2f5" }}
              onClick={() => {
                ratingStyleHandler3();
              }}>
              <p>{`5`}</p>
              <FaRegStar className="rating-icon" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelSearch;

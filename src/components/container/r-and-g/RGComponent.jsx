import React, { useState, useEffect, useRef, useContext } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { RoomAdultDetails } from "../HotelSearch";
import ReactDOMServer from "react-dom/server";
import ChildrenAgeComponent from "../childrenAge/ChildrenAgeComponent";

// export const RoomCount = createContext();

const RGComponent = () => {
  const RoomAdultDetailsImport = useContext(RoomAdultDetails);
  const {
    roomNW,
    setRoomNW,
    adultNW,
    setAdultNW,
    childrenNW,
    setChildrenNW,
    rgComponent,
    childAgeSelect,
    childrenDescription,
  } = RoomAdultDetailsImport;

  // const [room, setRoom] = useState(0);
  // const [adult, setAdult] = useState(0);
  // const [children, setChildren] = useState(0);

  const roomAddHandler = (e) => {
    e.preventDefault();
    setRoomNW((prev) => prev + 1);
  };
  const roomRemoveHandler = (e) => {
    e.preventDefault();
    setRoomNW((prev) => prev - 1);
  };
  const adultAddHandler = (e) => {
    e.preventDefault();
    setAdultNW((prev) => prev + 1);
  };
  const adultRemoveHandler = (e) => {
    e.preventDefault();
    setAdultNW((prev) => prev - 1);
  };
  const childrenAddHandler = (e) => {
    e.preventDefault();
    setChildrenNW((prev) => prev + 1);
    childrenDescription.current.style.display = "block";
    // setChildDropdown();
  };
  const childrenRemoveHandler = (e) => {
    e.preventDefault();
    setChildrenNW((prev) => prev - 1);
  };

  const rgSubmitHandler = (e) => {
    e.preventDefault();
    rgComponent.current.style.display = "none";
  };

  const [childDropdown, setChildDropdown] = useState(<ChildrenAgeComponent />);

  return (
    <div className="rg-component" ref={rgComponent}>
      <div className="rg-component-inner">
        <div className="option-wrapper">
          <div className="counter-wrapper">
            <div className="rooms d-flex-sb">
              <p>Rooms</p>
              <div className="user-select d-flex-sb">
                <div className="minus-circle d-flex">
                  <button
                    className="counter-button"
                    onClick={(e) => {
                      roomRemoveHandler(e);
                    }}>
                    <MdRemoveCircleOutline />
                  </button>
                </div>
                {/* <div className="count d-flex">{room}</div> */}
                <div className="count d-flex">{roomNW}</div>
                <div className="plus-circle d-flex">
                  <button
                    className="counter-button"
                    onClick={(e) => {
                      roomAddHandler(e);
                    }}>
                    <MdAddCircleOutline />
                  </button>
                </div>
              </div>
            </div>

            <div className="adults d-flex-sb">
              <p>Adults</p>
              <div className="user-select d-flex-sb">
                <div className="minus-circle d-flex">
                  <button
                    className="counter-button"
                    onClick={(e) => {
                      adultRemoveHandler(e);
                    }}>
                    <MdRemoveCircleOutline />
                  </button>
                </div>
                {/* <div className="count d-flex">{adult ? adult : room}</div> */}
                <div className="count d-flex">{adultNW}</div>
                <div className="plus-circle d-flex">
                  <button
                    className="counter-button"
                    onClick={(e) => {
                      adultAddHandler(e);
                    }}>
                    <MdAddCircleOutline />
                  </button>
                </div>
              </div>
            </div>

            <div className="children d-flex-sb">
              <p>Children</p>
              <div className="user-select d-flex-sb">
                <div className="minus-circle d-flex">
                  <button
                    className="counter-button"
                    onClick={(e) => {
                      childrenRemoveHandler(e);
                    }}>
                    <MdRemoveCircleOutline />
                  </button>
                </div>
                <div className="count d-flex">{childrenNW}</div>
                {/* <div className="count d-flex">{children}</div> */}
                <div className="plus-circle d-flex">
                  <button
                    className="counter-button"
                    onClick={(e) => {
                      childrenAddHandler(e);
                    }}>
                    <MdAddCircleOutline />
                  </button>
                </div>
              </div>
            </div>

            <div className="children-description" ref={childrenDescription}>
              Child's Age as of Check-in Date.
              <div className="childAgeSelect" ref={childAgeSelect}>
                {childDropdown}
              </div>
            </div>
          </div>
        </div>

        <div className="submit-wrapper">
          <button
            onClick={(e) => {
              rgSubmitHandler(e);
            }}
            className="rgSubmitHandler">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default RGComponent;

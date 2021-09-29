import React, { useRef } from "react";

const TourSearch = () => {
  const inputRef = useRef(null);

  const blurStyle = "1.5px solid #f0f2f5";
  const clickStyle = "2px solid #2681ff";
  return (
    <div className="tour-search">
      <div className="input-wrapper">
        <div className="input-block" ref={inputRef}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Tours & Tickets..."
            onBlur={() => (inputRef.current.style.borderBottom = blurStyle)}
            onClick={() => (inputRef.current.style.borderBottom = clickStyle)}
          />
        </div>
      </div>

      <p
        style={{
          fontSize: "12px",
          letterSpacing: "2px",
          padding: "3px",
          boxSizing: "border-box",
          color: "#777777",
        }}>
        Component Under Construction..!!
      </p>
    </div>
  );
};

export default TourSearch;

import React, { useState, useRef, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarInfoContext } from "../HotelSearch";

const CalendarComponent = () => {
  const calendarInnerRef = useRef(null);
  const calendarCheckInRef = useRef(null);
  const calendarCheckOutRef = useRef(null);

  const CalendarInfoContextImport = useContext(CalendarInfoContext);
  const {
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
  } = CalendarInfoContextImport;

  const specificDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1
  );

  const minDate = new Date();
  // const maxDate = new Date();
  // console.log(maxDate);

  //
  var someDate = new Date();
  var numberOfDaysToAdd = 6;
  let res = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  console.log(res + "test");
  //

  // let checkOutGetWeek = calendarCheckOutSub.toLocaleString("default", {
  //   weekday: "short",
  // });
  // console.log(checkOutGetWeek);

  function maxDate(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  let maxDateHandler = maxDate(new Date(), 30);

  return (
    <div className="calendar-inner" ref={calendarInnerRef}>
      <div className="calendar-inner-top">
        <div className="calendar-check-in" ref={calendarCheckInRef}>
          <Calendar
            onChange={setCalendarCheckIn}
            value={calendarCheckIn}
            minDate={minDate}
            maxDate={maxDateHandler}
            // selectRange={true}
          />
          <h6>{calendarCheckIn.toString()}</h6>
          {/* {"check in date" + calendarCheckIn} */}
        </div>
        <div className="calendar-check-out" ref={calendarCheckOutRef}>
          <Calendar
            onChange={setCalendarCheckOutSub}
            value={calendarCheckOutSub}
            minDate={minDate}
            maxDate={maxDateHandler}
            // value={addDaysHandler}
            // showNeighboringMonth={true}
          />
          <h6>{calendarCheckOutSub.toString()}</h6>
          {/* {"check out date" + calendarCheckOut} */}
        </div>
      </div>

      <div className="calendar-inner-bottom">
        <p>Check-in and check-out times are in local time.</p>
        {totalDays} Nights
      </div>
    </div>
  );
};

export default CalendarComponent;

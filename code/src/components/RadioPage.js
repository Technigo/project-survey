import React from "react";
import "./radio.css";

const dates = ["Friday 27th", "Saturday 28th", "Friday 27th & Saturday 28th"];

const RadioPage = ({ setEventDate, eventDate }) => {
  return (
    <div className="radio-col">
      <div className="radio-row">
        <h2>What day will you attend?</h2>
        {dates.map((date) => (
          <label className="radiobutton-container" key={date} tabIndex="0">
            <input
              type="radio"
              name="radio"
              value={date}
              onChange={(event) => setEventDate(event.target.value)}
              checked={eventDate === date}
              id={date}
            />
            <span className="custom-radio"></span>
            <span className="radio-text">{date}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioPage;

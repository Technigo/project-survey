import React from "react";

const dates = ["Friday 27th", "Saturday 28th", "Friday 27th & Saturday 28th"];

const RadioPage = ({ setEventDate, eventDate }) => {
  return (
    <div>
      <h2>What day will you attend?</h2>
      {dates.map((date) => (
        <label key={date} tabIndex="0">
          <input
            type="radio"
            name="radio"
            value={date}
            onChange={(event) => setEventDate(event.target.value)}
            checked={eventDate === date}
            id={date}
          />
          {date}
        </label>
      ))}
    </div>
  );
};

export default RadioPage;

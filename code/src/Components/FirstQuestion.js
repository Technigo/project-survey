import React from "react";

const FirstQuestion = ({ name, date, onDateChange }) => {
  return (
    <div>
      <h2>
        We look forward to seeing you at the event. What date will you be
        joining us?
      </h2>
      <div>
        <label htmlFor="green">Friday, March 25, 2022</label>
        <input id="green" type="radio" value={date} onChange={onDateChange} />
      </div>
      <div>
        <label htmlFor="date">Saturday, March 26, 2022</label>
        <input id="date" type="radio" value={date} onChange={onDateChange} />
      </div>
      <div>
        <label htmlFor="Date">Sunday, March 27, 2022</label>
        <input id="date" type="radio" value={date} onChange={onDateChange} />
      </div>
    </div>
  );
};

export default FirstQuestion;

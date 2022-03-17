import React from "react";

const Day = ({ setDay }) => {
  const dayArray = ["Friday", "Saturday", "Sunday"];

  return (
    <div className="survey-item day">
      <p className="section-heading">
        We look forward seeing you at the event. What date will you be joining
        us?
      </p>

      {dayArray.map((item) => (
        <label className="day" key={item}>
          <input
            type="radio"
            value={item}
            name="day"
            onChange={(e) => {
              setDay(e.target.value);
            }}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default Day;

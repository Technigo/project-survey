import React from "react";

const Day = ({ setDay }) => {
  const dayArray = ["Friday", "Saturday", "Sunday"];

  return (
    <div className="survey-item day">
      <p className="section-heading">What day will you be joining us?</p>

      {dayArray.map((item) => (
        <label className="day" key={item}>
          <input
            type="radio"
            value={item}
            tabindex="-1"
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

import React from "react";

const Time = ({ setTime }) => {
  const hourArray = ["10", "12", "2", "4"];

  return (
    <>
      <div className="survey-item-time">
        <p className="section-heading">What time?</p>
        {hourArray.map((choice) => (
          <label className="time" key={choice}>
            <input
              type="radio"
              value={choice}
              name="time"
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
            {choice}
          </label>
        ))}
      </div>
    </>
  );
};

export default Time;

import React from "react";

const Time = ({ setTime }) => {
  const hourArray = ["6pm", "7pm", "8pm", "9pm"];

  return (
    <>
      <div className="survey-item-time">
        <p className="section-heading">What time will you show up?</p>
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

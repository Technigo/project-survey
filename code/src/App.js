import React, { useState } from "react";

const qualityAnswers = ["Yes", "No"];

export const App = () => {
  const [name, setName] = useState("");
  const [quality, setQuality] = useState("");
  const [time, setTime] = useState("");
  const [experience, setExperience] = useState("");
  const [hideForm, setHideForm] = useState(false);
  const [style, setStyle] = useState({ display: "none" });

  const handleSubmit = event => {
    event.preventDefault();
    setHideForm(!hideForm);
    setStyle(style);
  };

  return (
    <div>
      <h1>Customer Satsfaction Survey "The Coffee time"</h1>
      {hideForm && (
        <div>
          <h3>
            Thank you {name} for your time and participation in our survey!
          </h3>
          <p>Are you satified? You answer was {quality} </p>
          <p>You visit our place {time} </p>
          <p>And here some of your experience and ideas for us: {experience}</p>
        </div>
      )}
      {!hideForm && style && (
        <form onSubmit={handleSubmit}>
          Please fill in your name:
          <label>
            <input
              type="text"
              value={name || ""}
              onChange={event => setName(event.target.value)}
            ></input>
          </label>
          Are you satisfied with the quality of our coffee place, {name}?
          {qualityAnswers.map(ans => (
            <label key={ans}>
              <input
                type="radio"
                value={ans}
                onChange={event => setQuality(event.target.value)}
                checked={quality === ans}
              ></input>
              {ans}
            </label>
          ))}
          How often do you visit our place?
          <label>
            <select
              value={time}
              onChange={event => setTime(event.target.value)}
            >
              <option value="">Select here</option>
              <option value="everyday">Everyday</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </label>
          Finally, how can we improve your experience? Do you have any ideas for
          us?
          <label>
            <input
              type="textarea"
              value={experience}
              onChange={event => setExperience(event.target.value)}
            ></input>
          </label>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

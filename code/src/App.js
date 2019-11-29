import React, { useState } from "react";
import { Summary } from "./components/Summary";
import "./index.css";

const selectHome = ["Downtown", "Suburb or small town", "Rural retreat"];
const activityLevels = ["not very active", "moderately active", "very active"];
const sizeGroups = ["tiny", "medium", "huge"];

export const App = () => {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [home, setHome] = useState("");
  const [activity, setActivity] = useState("");
  const [sizeGroup, setSize] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="form-container">
      <header>
        <div className="survey-title">
          Looking for the pawfect match? <br /> Complete the survey and adopt a
          furry friend!
        </div>
      </header>
      {showResult && <Summary name={name} active={activity} size={sizeGroup} />}
      {!showResult && (
        <form className="form-style" onSubmit={handleSubmit}>
          <h2 className="username">Your name:</h2>
          <input
            id="name"
            type="text"
            onChange={event => setName(event.target.value)}
            value={name}
          />

          <h2>Why would you like to adopt a dog?</h2>
          <select
            className="dropdown"
            onChange={event => setReason(event.target.value)}
            value={reason}
          >
            <option value="">Select the main reason</option>
            <option value="For companionship/friendship">
              For companionship/friendship
            </option>
            <option value="My family wants a pet">My family wants a pet</option>
            <option value="Recreational purposes(i.e hunting)">
              Recreational purposes (i.e hunting)
            </option>
            <option value="Always wanted to have a dog">
              Always wanted to have a dog
            </option>
            <option value="I just simply adore animals">
              I just simply adore animals
            </option>
          </select>
          <h2>Where is your home?</h2>
          {selectHome.map(space => (
            <label key={space}>
              <input
                type="radio"
                value={space}
                checked={home === space}
                onChange={() => setHome(space)}
              />
              <span className="fakeRadio" />
              {space}
            </label>
          ))}
          <h2>How active are you?</h2>
          {activityLevels.map(active => (
            <label key={active}>
              <input
                type="radio"
                value={active}
                onChange={() => setActivity(active)}
                checked={activity === active}
              />
              <span className="fakeRadio" />
              {active}
            </label>
          ))}
          <h2>What size of dog are you looking for?</h2>
          {sizeGroups.map(size => (
            <label key={size}>
              <input
                type="radio"
                value={size}
                onChange={() => setSize(size)}
                checked={sizeGroup === size}
              />
              <span className="fakeRadio" />
              {size}
            </label>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}

      <footer>Adopt don't shop!</footer>
    </div>
  );
};

import React, { useState } from "react";

const selectHome = ["Downtown", "Suburb or small town", "Rural retreat"];
const activityLevels = [
  "I'm lazy like a fat panda",
  "Not very active",
  "Moderately active",
  "Very active"
];
const ageGroups = ["10-19", "20-39", "40-59", "60+"];
const sizeGroups = ["Toy: compact enough for my lap", "Medium", "I don't care"];

export const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [reason, setReason] = useState("");
  const [home, setHome] = useState("");
  const [activity, setActivity] = useState("");
  const [sizeGroup, setSize] = useState("");

  return (
    <div className="form">
      <form onSubmit={event => event.preventDefault()}>
        <h1 className="survey-title">Dog Adoption Survey</h1>
        <h2 className="username">Your name:</h2>
        <input
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <h2 className="age">How old are you?</h2>
        {ageGroups.map(group => (
          <label key={group}>
            <input
              className="formRadiobtn"
              type="radio"
              value={group}
              onChange={event => setAge(event.target.value)}
              checked={age === group}
            />
            {group}
          </label>
        ))}
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
          <option value="Recreational purposes(hunting)">
            Recreational purposes (i.e hunting)
          </option>
          <option value="Always wanted to get one">
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
              className="radioBtn"
              type="radio"
              value={space}
              onChange={event => setHome(event.target.value)}
              checked={home === space}
            />
            {space}
          </label>
        ))}
        <h2>How active are you?</h2>
        {activityLevels.map(active => (
          <label key={active}>
            <input
              className="radioBtn"
              type="radio"
              value={active}
              onChange={event => setActivity(event.target.value)}
              checked={activity === active}
            />
            {active}
          </label>
        ))}
        <h2>What size of dog are you looking for?</h2>
        {sizeGroups.map(size => (
          <label key={size}>
            <input
              className="radioBtn"
              type="radio"
              value={size}
              onChange={event => setSize(event.target.value)}
              checked={sizeGroup === size}
            />
            {size}
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

import React, { useState } from "react";

const Forms = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState();
  const [occupation, setOccupation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, lastName, gender, occupation });
  };

  return (
    <header>
      <div className="container">
        <h1> SURVEY FORM</h1>
        <form className="forms-container" onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
              placeholder="Your Name"
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
              placeholder="Your Last Name"
            />
          </label>

          <div className="forms-container__gender">
            Gender:
            <label>
              Male
              <input
                type="radio"
                value="Male"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === "Male"}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                value="Female"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === "Female"}
              />
            </label>
            <label>
              Other
              <input
                type="radio"
                value="Other"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === "Other"}
              />
            </label>
          </div>

          <div>
            <label>Which option best describes your current occupation?</label>
            <select
              onChange={(event) => setOccupation(event.target.value)}
              value={occupation}
            >
              <option value="">Choose occupation:</option>
              <option value="FullTime">Full Time</option>
              <option value="PartTime">Part Time</option>
              <option value="Student">Student</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>

          <div className="forms-container__slidecontainer">
            Age (from 18-100):
            <input
              type="range"
              min="18"
              max="100"
              className="slider"
              id="myRange"
            />
          </div>

          <input
            className="forms-container__submit"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </header>
  );
};

export default Forms;

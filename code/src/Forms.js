import React, { useState } from "react";

const Forms = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState();
  const [occupation, setOccupation] = useState("");
  const [age, setAge] = useState(18);
  const [information, setInformation] = useState([]);

  const handleInformationChange = (informationValue) => {
    information.includes(informationValue)
      ? setInformation(information.filter((item) => item !== informationValue))
      : setInformation([...information, " ", informationValue]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name,
      lastName,
      gender,
      occupation,
      age,
      informations: information,
    });
  };

  return (
    <header>
      <div className="container">
        <h1> SURVEY FORM</h1>
        <form className="forms-container" onSubmit={handleSubmit}>
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              id="firstName"
              placeholder="Your Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
              pattern="/^[a-z ,.'-]+$/i"
            />
          </label>

          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              id="lastName"
              placeholder="Your Last Name"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
              required
              pattern="/^[a-z ,.'-]+$/i"
            />
          </label>

          <div className="forms-container__gender">
            Gender:
            <label htmlFor="male">
              Male
              <input
                type="radio"
                id="male"
                value="male"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === "male"}
              />
            </label>
            <label htmlFor="female">
              Female
              <input
                type="radio"
                id="femaile"
                value="female"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === "female"}
              />
            </label>
            <label htmlFor="other">
              Other
              <input
                type="radio"
                id="other"
                value="other"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === "other"}
              />
            </label>
          </div>

          <div>
            <label htmlFor="occupation">
              Which option best describes your current occupation?
            </label>
            <select
              id="occupation"
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

          <label htmlFor="myRange" className="forms-container__slidecontainer">
            Age (from 18-100): {age}
            <input
              type="range"
              min="18"
              max="100"
              className="slider"
              id="myRange"
              value={age}
              step={1}
              onChange={(event) => setAge(event.target.value)}
            />
          </label>

          <div>
            Where did you hear about us?
            <label htmlFor="facebook">
              Facebook
              <input
                type="checkbox"
                id="facebook"
                value="facebook"
                checked={information.includes("facebook")}
                onChange={() => handleInformationChange("facebook")}
              />
            </label>
            <label htmlFor="linkedin">
              Linkedin
              <input
                type="checkbox"
                id="linkedin"
                value="linkedin"
                checked={information.includes("linkedin")}
                onChange={() => handleInformationChange("linkedin")}
              />
            </label>
            <label htmlFor="friends">
              Friends
              <input
                type="checkbox"
                id="friends"
                value="friends"
                checked={information.includes("friends")}
                onChange={() => handleInformationChange("friends")}
              />
            </label>
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

import React, { useState } from "react";

const Occupation = ({ onSubmit }) => {
  const [occupation, setOccupation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      occupation,
    });
  };

  return (
    <form className="forms-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="occupation">
          Which option best describes your current occupation?
        </label>
        <select
          id="occupation"
          onChange={(event) => setOccupation(event.target.value)}
          value={occupation}
          name="occupation"
          required
        >
          <option value="">Choose occupation:</option>
          <option value="FullTime">Full Time</option>
          <option value="PartTime">Part Time</option>
          <option value="Student">Student</option>
          <option value="Unemployed">Unemployed</option>
        </select>
      </div>
      <input className="forms-container__submit" type="submit" value="Submit" />
    </form>
  );
};

export default Occupation;

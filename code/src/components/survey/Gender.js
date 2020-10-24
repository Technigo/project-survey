import React, { useState } from "react";

const Gender = ({ onSubmit }) => {
  const [gender, setGender] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      gender,
    });
  };

  return (
    <form className="forms-container" onSubmit={handleSubmit}>
      <div className="forms-container__gender">
        Gender:
        <label htmlFor="male">
          Male
          <input
            name="gender"
            type="radio"
            id="male"
            value="male"
            onChange={(event) => setGender(event.target.value)}
            checked={gender === "male"}
            required
          />
        </label>
        <label htmlFor="female">
          Female
          <input
            name="gender"
            type="radio"
            id="femaile"
            value="female"
            onChange={(event) => setGender(event.target.value)}
            checked={gender === "female"}
            required
          />
        </label>
        <label htmlFor="other">
          Other
          <input
            name="gender"
            type="radio"
            id="other"
            value="other"
            onChange={(event) => setGender(event.target.value)}
            checked={gender === "other"}
            required
          />
        </label>
      </div>

      <input className="forms-container__submit" type="submit" value="Submit" />
    </form>
  );
};
export default Gender;

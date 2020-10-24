import React, { useState } from "react";

const Age = ({ onSubmit }) => {
  const [age, setAge] = useState(18);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      age,
    });
  };

  return (
    <form className="forms-container" onSubmit={handleSubmit}>
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
      <input className="forms-container__submit" type="submit" value="Submit" />
    </form>
  );
};

export default Age;

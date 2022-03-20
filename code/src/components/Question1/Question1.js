import React from "react";

import "./Question1.css";

const Question1 = (props) => {
  const { username, setUsername } = props;

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  }

  return (
    <>
      <h2>What's your name?</h2>
      <div className="input-container">
        <label htmlFor="name" className="visually-hidden">Name: </label>
        <input
          id="name"
          type="text"
          placeholder="type your name"
          value={username}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default Question1;

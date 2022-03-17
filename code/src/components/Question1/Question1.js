import React from "react";

import "./Question1.css";

const Question1 = (props) => {
  const { username, setUsername } = props;

  const onInputChange = (event) => {
    setUsername(event.target.value);
}

  return (
    <>
      <h2>What is your name?</h2>
      <label htmlFor="name" className="visually-hidden">Name: </label>

      <input
        id="name"
        type="text"
        placeholder="your name here"
        value={username}
        onChange={onInputChange}
      />

    </>
  );
};

export default Question1;

import React from "react";

import "./Question1.css";

const Question1 = (props) => {
  const { username, onInputChange } = props;
  return (
    <>
      <h2>Question1</h2>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          value={username}
          onChange={onInputChange}
        />
      </label>
      <hr />
    </>
  );
};

export default Question1;

import React from "react";

export const NameQuestion = props => {
  const { name, setName } = props;

  return (
    <label>
      <p>What is your name?</p>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </label>
  );
};
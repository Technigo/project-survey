import React from "react";

export const NameQuestion = props => {
  const { name, setName } = props;

  return (
    <label>
      What's you name?
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </label>
  );
};
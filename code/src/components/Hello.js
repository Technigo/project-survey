import React from "react";

import "./components.css";

const Hello = ( {onNameChange, name}) => {
  return (
    <>
      <form>
        <h2>Hello!</h2>
        <div>
          <h3>What is your name or nickname?</h3>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              onNameChange(e);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default Hello;

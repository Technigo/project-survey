import React from "react";

const Hello = ( {onNameChange, name}) => {
  return (
    <>
      <form>
        <h2>Hello!</h2>
        <div>
          <h3>What is your name or nickname?</h3>
          <input
            className="name-input"
            id="name"
            type="text"
            value={name}
            onChange={onNameChange}
          />
        </div>
      </form>
    </>
  );
};

export default Hello;

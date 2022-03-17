import React from "react";

const Name = ({ nameInput, NameInputChange, Change }) => {
  return (
    <div>
      <h2>Enter your name</h2>
      <form className="form-container">
        <label htmlFor="nameInput"></label>
        <input
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={NameInputChange}
          placeholder="First & Last name"
        />
        <button disabled={nameInput === ""} onClick={Change} className="button">
          Continue ➤
        </button>
      </form>
    </div>
  );
};
export default Name;

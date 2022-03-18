import React from "react";

const Name = ({ nameInput, NameInputChange, Change }) => {
  return (
    <div class="container">
      <h2>Enter your name</h2>
      <form className="form-container">
        <label htmlFor="nameInput"></label>
        <input
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={NameInputChange}
          placeholder="Your name"
        />

        <button disabled={nameInput === ""} onClick={Change} className="button">
          Continue ➤
        </button>
      </form>
    </div>
  );
};
export default Name;

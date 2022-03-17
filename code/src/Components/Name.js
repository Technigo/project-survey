import React from "react";

const Name = ({ name, setName }) => {
  return (
    <div className="survey-item name">
      <label className="section-heading" htmlFor="name">
        Final question, Whats your name?
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default Name;

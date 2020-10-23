import React from "react";

const Question1 = ({ userName, onNameChange }) => {
  return (
    <div className="question-1">
      <label htmlFor="name">Blablabla</label>
      <input value={userName} onChange={onNameChange} id="name" type="text" />
    </div>
  );
};

export default Question1;

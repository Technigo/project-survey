import React from "react";

const Question4 = ({ userName, onNameChange }) => {
  return (
    <div className="question-1">
      <label htmlFor="email"></label>
      <input
        value={userName}
        onChange={onNameChange}
        id="email"
        type="email"
        placeholder="Enter your email..."
        required
      />
    </div>
  );
};

export default Question4;

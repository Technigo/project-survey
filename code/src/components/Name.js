import React from 'react';

const Name = ({ name, setName, step }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="name-container">
      <div className="headings">
        <h2 aria-hidden="true">Question {step} / 5</h2>
        <h2 className="visually-hidden">Question {step} out of 5</h2>
        <hr />
      </div>
      <div className="question-container">
        <h4>What is your name?</h4>
        {/* <p>Current state: {name}</p> */}
        <input
          type="text"
          value={name}
          onChange={handleNameChange} />
      </div>
    </div>
  );
};

export default Name;

import React from 'react';

const NameQuestion = ({ name, callbackOnChange }) => {

  const handleNameChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          type="text"
          onChange={handleNameChange}
          value={name}
          name="name" 
          required
        />
      </div>
    </>
  );
};

export default NameQuestion;
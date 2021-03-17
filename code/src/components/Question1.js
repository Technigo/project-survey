import React from 'react';

const Question1 = ({ name, callbackOnChange }) => {

  const handleChange = (e) => {
    callbackOnChange(e.target.name, e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={name}
          name="name" 
          required
        />
      </div>
    </>
  );
};

export default Question1;
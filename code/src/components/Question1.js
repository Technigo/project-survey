import React, { useState } from 'react';

const Question1 = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
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
        />
      </div>
    </>
  );
};

export default Question1;
import React, { useState } from 'react';

const Question1 = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <section>
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={name} 
          required
        />
      </section>
    </>
  );
};

export default Question1;
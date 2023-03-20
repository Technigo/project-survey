import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    const limit = 10;
    setName(event.target.value.slice(0, limit));
  };
  return (
    <div className="page-one-container">
      <h4 className="page-one-title">Bench Press</h4>
      <p className="page-one-sub-title">1 RM</p>
      <p className="page-two-question">What is your name?</p>
      <input className="input-field" type="text" value={name} onChange={handleNameChange} />
    </div>
  );
}

import React from 'react';

const Type = ({ type, setType, step }) => {
  // console.log('{ type, setType, step };', { type, setType, step })
  return (
    <div className="container type">
      <h2>Question {step}</h2>
      <p>What type of series are you in the mood for?</p>
      <form className="form type">
        <p>Current state: {type}</p>
        <select
          onChange={(event) => setType(event.target.value)}
          value={type}>
          <option value="" disabled>Select type:</option>
          <option value="Series">Series</option>
          <option value="Mini-series">Mini-series</option>
          <option value="Documentary">Documentary</option>
          <option value="Anthology series">Anthology series</option>
        </select>
      </form>
    </div>
  );
};

export default Type;

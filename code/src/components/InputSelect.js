import React from 'react';

const InputSelect = ({ id, question, select, setSelect }) => {
  return (
    <label>
      <h2>{question}</h2>
      <select
        id={id}
        onChange={event => setSelect(event.target.value)}
        value={select}
      >
        <option value="">Select</option>
        <option value="1-10">1-10</option>
        <option value="11-20">11-20</option>
      </select>
    </label>
  );
};

export default InputSelect;

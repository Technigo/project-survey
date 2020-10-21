import React from 'react';

const InputSelect = ({ className, question, value, setSelect }) => {
  return (
    <label className={className} htmlFor="InputSelect">
      {question}
      <select
        id="InputSelect"
        onChange={event => setSelect(event.target.value)}
        value={value}
      >
        <option value="">Select</option>
        <option value="1-10">1-10</option>
        <option value="11-20">11-20</option>
      </select>
    </label>
  );
};

export default InputSelect;

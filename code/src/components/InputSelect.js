import React from 'react';

const InputSelect = ({ question, array, select, setSelect }) => {
  return (
    <label htmlFor="InputSelect">
      <h2>{question}</h2>
      <select
        name="InputSelect"
        onChange={event => setSelect(event.target.value)}
        value={select}
      >
        <option value="">Select</option>
        <option value="1-10">1-10</option>
        <option value="11-20">11-20</option>
        {/* {array.map(select => {
          select === '' ? (
            <option key={select} value={select}>
              Select
            </option>
          ) : (
            <option key={select} value={select}>
              {select}
            </option>
          );
        })} */}
      </select>
    </label>
  );
};

export default InputSelect;

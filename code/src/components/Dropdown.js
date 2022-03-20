import React from 'react';

const Dropdown = ({ question, alternatives, onDropdownChange, dropdownValue }) => {

  return (
    <div>
      <label htmlFor={question}>{question}</label>
      <select onChange={onDropdownChange}>
      {alternatives.map((alternative) => (
        <option 
          value={alternative}
          key={alternative}
          id={question}
          >
          {alternative}
        </option>
      ))}
      </select>
    </div>
  )
}

export default Dropdown;
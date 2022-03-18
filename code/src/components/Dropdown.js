import React from 'react';

// const Dropdown = (props) => {
const Dropdown = ({ question, alternatives, onDropdownChange, dropdownValue }) => {


  //const [alternatives, setAlternatives] = useState('');

  return (
    <div>
      <label>{question}</label>
      <select onChange={onDropdownChange}>
      {alternatives.map((alternative) => (
        <option 
          value={alternative}
          key={alternative}
          //selected={dropdownValue === alternative}
          >
          {alternative}
        </option>
      ))}
      </select>
    </div>
  )
}

export default Dropdown;
import React, { useState } from 'react';

const Dropdown = (props) => {

  const [alternatives, setAlternatives] = useState('');

  return (
    <div>
      <label>{props.question}</label>
      <select onChange={(event) => setAlternatives(event.target.value)}>
      {props.alternatives.map((alternative) => (
        <option 
          value="{alternative}"
          key="{alternative}"
        >
          {alternative}
        </option>
      ))}
      </select>
    </div>
  )
}

export default Dropdown;
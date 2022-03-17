import React from 'react';

const Dropdown = (props) => {
    
  return (
    <div>
      <label>{props.question}</label>
      <select>
        <option value="test">test1</option>
        <option value="test2">test2</option>
        <option value="test3">test3</option>
      </select>
    </div>
  )
}

export default Dropdown;
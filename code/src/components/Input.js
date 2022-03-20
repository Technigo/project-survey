import React from 'react';

const Input = ({ question, inputvalue, onInputChange }) => {

    return (
    <div>
      <label htmlFor="input">{question}</label>
      <input id="input" type="text" value={inputvalue} onChange={onInputChange}/>
    </div>
  )
}

export default Input;
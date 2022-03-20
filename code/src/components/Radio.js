import React from 'react';

const Radio = ({question, onRadioChange}) => {
    
  return (
    <div>
      {question.question}
      {question.alternatives.map((alternative) => (
        <label key={alternative} htmlFor={alternative}>
          <input
          id={alternative}
          type="radio"
          value={alternative}
          onChange={onRadioChange}
          name={"radio" + question.number}
          />
          {alternative}
        </label>
      ))}
    </div>
  )
}

export default Radio;
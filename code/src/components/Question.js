import React from 'react';

const Question = ({ question, form }) => {
  return (
    <div>
      <h2>{question.header}</h2>
      <p>{question.text}</p>
      {form}
    </div>

  )
}

export default Question;
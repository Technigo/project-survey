import React from 'react';

export const Question = (props) => {
  return (
    <h1 className="question">
      {props.question}
    </h1>
  );
}
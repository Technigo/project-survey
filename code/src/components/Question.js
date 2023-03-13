import React from 'react';

export const Question = (props) => {
  return (
    <h1 className="section-title">
      {props.question}
    </h1>
  );
}
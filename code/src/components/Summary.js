import React from 'react';

const Summary = (props) => {
  return (
    <div className="summary-container">
      <p>
        <span>So you {props.formData.name},</span>
        <span>with {props.formData.sushi}</span>
        <span>with {props.formData.ingredient}</span>
      </p>
      <p>What a unique personality you have!!{props.formData.name}</p>
    </div>
  );
};

export default Summary;

import React from 'react';

export const Summary = (props) => {
  return (
    <div className="summary-container">
      <h1>Results</h1>
      <p>What a unique personality you have {props.formData.name}!!</p>
      <p>
        <span> So you love to listen to {props.formData.artistName}</span>
        <span>while you {props.formData.horseOptions}</span>
        <span> and you would like to {props.formData.selectedElephantOptions},</span>
        <span> all while making your life easier with your ability to
          {props.formData.SuperpowerOptions}.
        </span>
      </p>

    </div>
  );
};

export default Summary;

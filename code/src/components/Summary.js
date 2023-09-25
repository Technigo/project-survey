/* eslint-disable max-len */
import React from 'react';

export const Summary = (props) => {
  return (
    <div className="summary-container">
      <h1>Results</h1>
      <p className="summary-text">What a unique personality you have {props.formData.name}!!</p>
      <p className="summary-text">
        <span> So you would listen to {props.formData.artistName} </span>
        <span>while you fight {props.formData.horseOptions}.</span>
        <span> And you would like to show off around town by {props.formData.selectedElephantOptions},</span>
        <span> all while making your life easier with your ability to {props.formData.SuperpowerOptions}.</span>
      </p>
      <h2>I gotta say you sound fun at parties! </h2>

    </div>
  );
};

export default Summary;

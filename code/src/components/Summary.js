import React from 'react';

const Summary = (props) => {
  return (
    <div className="summary-container">
      <h1>Results</h1>
      <p>What a unique personality you have {props.formData.name}!!</p>
      <p>
        <span> So you love to listen to {props.formData.artistName}</span>
        <span>while you {props.formData.horseOption}</span>
        <span> and you {props.formData.name},</span>
      </p>

    </div>
  );
};
export { Summary };
export default Summary;

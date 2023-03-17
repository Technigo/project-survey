import React from 'react';

// will add more here tomorrow - NOT FINISHED //
const SubmitScreen = ({ name }) => {
  return (
    <div className="surveySummarizeBox">
      <h1>Thanks for taking this survey today!</h1>
      <p>Your name is:</p>
      <h2>{name}</h2>
      <p>Q1 - You thought that - put the answer in here</p>
      <h2>/ TO DO</h2>
      <p>Q2 - You thought that - put the answer in here</p>
      <h2>/ TO DO</h2>
      <p>Q3 - You thought that - put the answer in here</p>
      <h2>/ TO DO</h2>
      <p>Q4 - You thought that - put the answer in here</p>
      <h2>/ TO DO</h2>
    </div>
  );
};

export default SubmitScreen;
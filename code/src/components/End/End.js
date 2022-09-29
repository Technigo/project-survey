import React from 'react';

const End = ({ carbs }) => {
  return (
    <div className="main-container">
      <div>
        <h1>Thank you for your answers!</h1>
        <h3>Which carb you like: {carbs} </h3>
      </div>
    </div>
  );
};

export default End;
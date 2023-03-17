import React from 'react';

export const Summary = ({ name, workplace, time, slider, feedback }) => {
  return (
    <div className="survey-result">
      <h2>Thank you for filling out this form!</h2>
      <h3>Summary:</h3>
      <p>Name: {name}</p>
      <p>Workplace: {workplace}</p>
      <p>Time at workplace: {time}</p>
      <p>Your input: {slider} %</p>
      <p>Feedback: {feedback}</p>
    </div>
  );
};

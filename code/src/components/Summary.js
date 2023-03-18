import React from 'react';

export const Summary = ({ name, workplace, time, slider, feedback }) => {
  return (
    <div className="survey-result">
      <h2>Thank you for filling out this form!</h2>
      <h3>Summary:</h3>
      <h2>Name: {name}</h2>
      <h2>Workplace: {workplace}</h2>
      <h2>Time at workplace: {time}</h2>
      <h2>Your input: {slider} %</h2>
      <h2>Feedback: {feedback}</h2>
    </div>
  );
};

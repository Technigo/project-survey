import React from 'react';

export const Result = ({ ageGroup, answer, sportType, weeklyTraining }) => {
  return (
    <div>
      <h2>Thank you for your input!</h2>
      <p>Age: {ageGroup}</p>
      <p>Do you do any sport or physical activity? {answer}</p>
      <p>What kind of sport or activity? {sportType}</p>
      <p>How often do you train? {weeklyTraining}</p>
    </div>
  )
}
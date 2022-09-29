import React from 'react';

export const Result = ({ ageGroup, answer, sportType, weeklyTraining }) => {
  return (
    <div>
      <h2>Please check you answer</h2>
      <p>Age: {ageGroup}</p>
      <p>Do you do any sport or physical activity? {answer}</p>
      <p>What kind of sport or activity? {sportType}</p>
      <p>How often do you train? {weeklyTraining}</p>
    </div>
  )
}
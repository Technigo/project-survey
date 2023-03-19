import React from 'react';

const EndSurvey = ({ name, favoriteplace, time, slider, comments }) => {
  return (
    <div className="survey-summary">
      <h2>Thank you for answering this survey!</h2>
      <h2>Summary:</h2>
      <h2>Name: {name}</h2>
      <h2>Favorite place: {favoriteplace}.</h2>
      <h2>Time at favorite place: {time}.</h2>
      <h2>Your input: {slider} % happy.</h2>
      <h2>Additional comments: {comments}.</h2>
    </div>
  );
};

export default EndSurvey;
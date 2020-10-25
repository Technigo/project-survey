import React, { useState } from 'react';

export const Welcome = (props) => {
  const [surveyStarted, setSurveyStarted] = useState(false);

  const clickStartButton = () => {
    setSurveyStarted(true);
    props.onChange(surveyStarted);
  }

  return (
    <section className="form-welcome-message">
      <h1 className="welcome-header">You have been invited to my {props.data.eventTitle}</h1>
      <p>It will take place on {props.data.date} in {props.data.location}</p>
      <p>If you want to attend, please answer these questions. See you!</p>
      <button
        tabIndex="0"
        className="next-button"
        type="button"
        onClick={() => clickStartButton()}>
        Go
      </button>
    </section>
  )
}

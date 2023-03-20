import React, { useState } from 'react';

export const Welcome = ({ nextHandler }) => {
  const [termAccept, setTermAccept] = useState(false);

  const acceptHandler = () => {
    setTermAccept(!termAccept);
  };

  return (
    <div className="welcome-container">
      <p>The following survey is about your experience of surveys.
        Please answer as truthfully and accurate as possible.
      </p>
      <p>
       Your answers will be presented to you at the end of the survey.
        The survey takes approximately 3 minutes to complete.
      </p>
      <label htmlFor="terms">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          checked={termAccept}
          onChange={acceptHandler} />
       I agree with the terms
      </label>
      <button
        className="start-button"
        type="submit"
        onClick={nextHandler}
        disabled={!termAccept}>
          Start survey
      </button>
    </div>
  );
};
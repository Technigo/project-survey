import React from 'react';

const Start = (props) => {
  const submitButton = (event) => {
    event.preventDefault();
    props.nextPage();
  };

  return (
    <div className="survey-container">
      <h1>Welcome to the dinner survey! Click the button below to
        move on to the first question.
      </h1>
      <form onSubmit={submitButton}>
        <button type="submit" id="submit" onClick={props.nextPage}>
            Start
        </button>
      </form>
    </div>
  )
}

export default Start;
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

export const Adult = () => {
  const [habit1, setHabit1] = useState(false);
  const [habit2, setHabit2] = useState(false)
  const [habit3, setHabit3] = useState(false);

  // Put data into arrays so you can map over them
  const habits = [habit1, habit2, habit3];
  const sets = [setHabit1, setHabit2, setHabit3];
  const questions = [
    'Moderate to high intensity cardio at least 2.5 hours a week?',
    'Strength train at least 2 days a week?',
    'Sit on your ass all day?'
  ];

  const responses = {
    'Moderate to high intensity cardio at least 2.5 hours a week?': habits[0],
    'Strength train at least 2 days a week?': habits[1],
    'Sit on your ass all day?': habits[2]
  };

  const countHabits = () => {
    console.log(responses)
    return responses;
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <h3>Check all of the habits that apply to you:</h3>
        {questions.map((question, index) => {
          return (
            <div key={question}>
              <label>
                {question}
                <input
                  type="checkbox"
                  checked={habits[index]}
                  value={questions[index]}
                  onChange={(event) => sets[index](event.target.checked)} />
              </label>
            </div>)
        })}
      </form>
      <button className="ok-btn" type="button" onClick={countHabits}>Next</button>
    </>
  )
}
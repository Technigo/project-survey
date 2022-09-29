import React, { useState } from 'react';

export const Adult = () => {
  const [habit1, setHabit1] = useState(false);
  const [habit2, setHabit2] = useState(false);
  const [habit3, setHabit3] = useState(false);

  const questions = [
    'Moderate to high intensity cardio at least 2.5 hours a week?',
    'Strength train at least 2 days a week?',
    'Sit on your ass all day?'
  ];

  const habits = [habit1, habit2, habit3];
  const sets = [setHabit1, setHabit2, setHabit3];
  const countHabits = (habit) => {
    habits.push(habit)
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
                  onChange={(event) => sets[index](event.target.checked)} />
              </label>
            </div>)
        })}
      </form>
      <button className="ok-btn" type="button">Next</button>
    </>
  )
}
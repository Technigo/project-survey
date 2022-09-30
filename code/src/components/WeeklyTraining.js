
import React from 'react';

const timesPerWeek = ['less than once a week', 'once a week', '2-3 times/week', '4-6 times/week', '7+ times/week'];

export const WeeklyTraining = ({ weeklyTraining, setWeeklyTraining }) => {
  const handleWeeklyTrainingChange = (event) => {
    setWeeklyTraining(event.target.value);
  }

  return (
    <div className="questionWrapper">
      <form>
        <h2>How many times do you train per week?</h2>
        {timesPerWeek.map((group) => (
          <label
            key={group}
            htmlFor="Weekly training"
            className="radioButton">
            <input
              id="radio"
              type="radio"
              value={group}
              onChange={handleWeeklyTrainingChange}
              checked={group === weeklyTraining} />
            {group}
          </label>
        ))}
      </form>
    </div>
  )
};
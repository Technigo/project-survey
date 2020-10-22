import React from 'react';

const ratings = ["1", "2", "3", "4", "5", "6"]

const RadioButtons = ({ rating, onRatingChange }) => {
  return (
    <section className="radio-buttons">
      <h2 className="label">2 - How are you feeling after this week?</h2>
      <div className="radio">
        {ratings.map(a => (
          <label className="radio-label" key={a}>
            <input
              className="radio-button"
              type="radio"
              value={a}
              checked={rating === a}
              onChange={onRatingChange}
            ></input>
            {a}
          </label>
        ))}
      </div>
    </section>
  )
}

export default RadioButtons;
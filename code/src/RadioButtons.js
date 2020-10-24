import React from 'react';

const ratings = ["Very worried", "Worried", "A little worried", "Pretty calm", "Calm", "Very calm"]

const RadioButtons = ({ rating, onRatingChange }) => {
  return (
    <section className="radio-buttons">
      <h2 id="radio-label" className="label">How are you feeling after this week?</h2>
      <div tabIndex="0" aria-labelledby="radio-label" className="radio">
        {ratings.map(a => (
          <label className="radio-label" key={a}>
            <input
              type="radio"
              name="ratings"
              value={a}
              checked={rating === a}
              onChange={onRatingChange}
              required
            ></input>
            <span className="radio-checkmark"></span>
            {a}
          </label>
        ))}
      </div>
    </section>
  )
}

export default RadioButtons;
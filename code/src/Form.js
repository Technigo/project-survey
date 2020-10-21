import React, { useState } from 'react';

// const ratings = ["1", "2", "3", "4", "5", "6"]

const Form = () => {
  const [week, setWeek] = useState('');
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');

  const onWeekChange = event => {
    setWeek(event.target.value);
  };

  const onRatingChange = event => {
    setRating(event.target.value);
  };

  const onFeedbackChange = event => {
    setFeedback(event.target.value);
  };

  console.log(week, rating);

  return (
    <form>
      <div className="dropdown">
        <h2 className="label">1 - What week are you feedbacking?</h2>
        {/* <label className="dropdown-label" htmlFor="week">1 - What week are you feedbacking?</label> */}
        <select className="dropdown-options" id="week" value={week} onChange={onWeekChange}>
          <option value="">Type or select an option</option>
          <option value="week1">Week 1</option>
          <option value="week2">Week 2</option>
          <option value="week3">Week 3</option>
          <option value="week4">Week 4</option>
          <option value="week5">Week 5</option>
        </select>
      </div>
      <div className="radio-buttons">
        <h2 className="label">2 - I'm feeling great after this week</h2>
        <div className="radio">
          {/* {ratings.map(rating => (
            <label className="radio-label" key={rating}>
              <input
                className="radio-button"
                type="radio"
                value={rating}
                checked={rating === { rating }}
                onChange={onRatingChange}
              ></input>
              {rating}
            </label>
          ))} */}
          <label className="radio-label">
            <input
              className="radio-button"
              type="radio"
              value="1"
              checked={rating === "1"}
              onChange={onRatingChange}
            ></input>
            1
          </label>
          <label className="radio-label">
            <input
              className="radio-button"
              type="radio"
              value="2"
              checked={rating === "2"}
              onChange={onRatingChange}
            ></input>
            2
          </label>
          <label className="radio-label">
            <input
              className="radio-button"
              type="radio"
              value="3"
              checked={rating === "3"}
              onChange={onRatingChange}
            ></input>
            3
          </label>
          <label className="radio-label">
            <input
              className="radio-button"
              type="radio"
              value="4"
              checked={rating === "4"}
              onChange={onRatingChange}
            ></input>
            4
          </label>
          <label className="radio-label">
            <input
              className="radio-button"
              type="radio"
              value="5"
              checked={rating === "5"}
              onChange={onRatingChange}
            ></input>
            5
          </label>
          <label className="radio-label">
            <input
              className="radio-button"
              type="radio"
              value="6"
              checked={rating === "6"}
              onChange={onRatingChange}
            ></input>
            6
          </label>
        </div>
      </div>
      <div className="textarea">
        <h2 className="label" htmlFor="feedback">3 - Would you mind telling us why you answered {rating}?</h2>
        {/* <label htmlFor="feedback">3 - Would you mind telling us why you answered {rating}?</label> */}
        <textarea className="text-input" value={feedback} onChange={onFeedbackChange} id="feedback" rows="6" />
      </div>
    </form>
  )
}

export default Form;
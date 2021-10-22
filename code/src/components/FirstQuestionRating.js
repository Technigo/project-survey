import React, { useState } from 'react';
import './firstQuestion.css';

const FirstQuestionRating = ({rating, onSetRating}) => {

  const [hover, setHover] = useState(0);
  return (
    <div className="firstQuestion">
      <p className="question">
        1{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        How would you rate the app overall?
      </p>
      <div className="starRating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? 'on' : 'off'}
              onClick={() => onSetRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
              <p className="number">{index}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FirstQuestionRating;

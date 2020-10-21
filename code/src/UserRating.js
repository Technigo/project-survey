import React from 'react';

const rating = [
  'Very Poor',
  'Poor',
  'Average',
  'Good',
  'Excellent'
]

const UserRating = ({ userRating, onRatingChange }) => {
  return (
    <div className="after-sales-questions">
      <p>How do you evaluate our AfterSales Services</p>
      {rating.map(rate => {
        return (
          <label key={rate}>
            <input
              type="radio"
              value={rate}
              onChange={event => onRatingChange(event.target.value)}
              checked={userRating === rate}
            />
            {rate}
          </label>
        )
      })}
    </div>
  );
};
 
export default UserRating;